import dbConnect from "../../../../utils/dbConnect";
import PostDB from "../../../../models/post";
import md5 from "js-md5";

export default async function handler(req, res) {
  const body = req.body;
  const sort = req.query.sort;
  const headers = req.headers;
  const key = process.env.NEXT_PUBLIC_POSTKEY;
  if (req.method === "POST") {
    if (!headers.key) {
      res.status(401).json({ message: "401: Unauthorized" });
    } else if (headers.key !== key) {
      res.status(401).json({ message: "401: Invalid authentication token" });
    } else {
      if (!body.title || !body.content || !body.category || !body.subject) {
        res.status(400).json({ message: "400: Invalid form body" });
      } else {
        await dbConnect();
        const NewPost = new PostDB({
          id: md5(Date.now().toString()),
          title: req.body.title,
          content: req.body.content,
          category: req.body.category,
          subject: req.body.subject,
          solved: false,
          author: "匿名貼文者",
          author_id: "00000000",
          like: 0,
          reply: [],
          collect: 0,
          delete: false,
          last_reply: "0",
          last_update: Date.now(),
          created_time: Date.now(),
        });
        await NewPost.save();
        res.status(201).json({ message: "201: Successful Create Post" });
      }
    }
  } else if (req.method === "GET") {
    if (!headers.key) {
      res.status(401).json({ message: "401: Unauthorized" });
    } else if (headers.key !== key) {
      res.status(401).json({ message: "401: Invalid authentication token" });
    } else {
      await dbConnect();
      let posts;
      if (sort === "hot") {
        posts = await PostDB.find({}).sort({ last_reply: -1 });
      } else {
        posts = await PostDB.find({}).sort({ created_time: -1 });
      }

      res
        .status(200)
        .json({ message: "200: Successful Get Posts", data: posts });
    }
  } else {
    res.status(405).json({ message: "405: Method Not Allow" });
  }
}
