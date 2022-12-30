import dbConnect from "../../../../utils/dbConnect";
import PostDB from "../../../../models/post";

export default async function handler(req, res) {
  const id = req.query.id;
  const headers = req.headers;
  const key = process.env.NEXT_PUBLIC_POSTKEY;
  if (req.method === "GET") {
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
          .json({ message: "200: Successful Get Post", data: post });
      }
    }
  } else {
    res.status(405).json({ message: "405: Method Not Allow" });
  }
}
