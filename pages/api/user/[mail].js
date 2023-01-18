import dbConnect from "../../../utils/dbConnect";
import UserDB from "../../../models/user";

export default async function handler(req, res) {
  const mail = req.query.mail;
  const headers = req.headers;
  const key = process.env.NEXT_PUBLIC_POSTKEY;
  if (req.method === "GET") {
    if (!headers.key) {
      res.status(401).json({ message: "401: Unauthorized" });
    } else if (headers.key !== key) {
      res.status(401).json({ message: "401: Invalid authentication token" });
    } else {
      let user;
      await dbConnect();

      user = await UserDB.findOne({ mail: mail });
      res.status(200).json({ message: "200: Successful Get User", data: user });
      //   if (!user) {
      //     res.status(404).json({ message: "404: User Not Found" });
      //   } else {
      //     res
      //       .status(200)
      //       .json({ message: "200: Successful Get User", data: user });
      //   }
    }
  } else {
    res.status(405).json({ message: "405: Method Not Allow" });
  }
}
