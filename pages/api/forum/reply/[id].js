import dbConnect from "../../../../utils/dbConnect";
import PostDB from "../../../../models/post";
import md5 from "js-md5";

export default async function handler(req, res) {
  const body = req.body;
  const id = req.query.id;
  const headers = req.headers;
  const key = process.env.NEXT_PUBLIC_POSTKEY;
  if (req.method === "POST") {
    if (!headers.key) {
      res.status(401).json({ message: "401: Unauthorized" });
    } else if (headers.key !== key) {
      res.status(401).json({ message: "401: Invalid authentication token" });
    } else {
      if (!body.content) {
        res.status(400).json({ message: "400: Invalid form body" });
      } else {
        await dbConnect();
        const post = await PostDB.findOne({ id: id });
        if (!post) {
          res.status(404).json({ message: "404: Post Not Found" });
        } else {
          post.last_reply = Date.now();
          post.reply.push({
            id: md5(Date.now().toString()),
            author: "匿名貼文者",
            author_id: "00000000",
            content: req.body.content,
            floor: "B" + (post.reply.length + 1).toString(),
            delete: false,
            last_update: Date.now(),
            created_time: Date.now(),
          });
          await post.save();
          res.status(201).json({ message: "201: Successful Create Reply" });
        }
      }
    }
  } else if (req.method === "GET") {
    if (!headers.key) {
      res.status(401).json({ message: "401: Unauthorized" });
    } else if (headers.key !== key) {
      res.status(401).json({ message: "401: Invalid authentication token" });
    } else {
      await dbConnect();
      const post = await PostDB.findOne({ id: id });
      if (!post) {
        res.status(404).json({ message: "404: Post Not Found" });
      } else {
        res
          .status(200)
          .json({ message: "200: Successful Get Posts", data: post.reply });
      }
    }
  } else {
    res.status(405).json({ message: "405: Method Not Allow" });
  }
}
