import dbConnect from "../../../utils/dbConnect";
import UserDB from "../../../models/user";

export default async function handler(req, res) {
  const headers = req.headers;
  const key = process.env.NEXT_PUBLIC_POSTKEY;
  if (req.method === "GET") {
    if (!headers.key) {
      res.status(401).json({ message: "401: Unauthorized" });
    } else if (headers.key !== key) {
      res.status(401).json({ message: "401: Invalid authentication token" });
    } else {
      let users;
      await dbConnect();

      users = await UserDB.find({});
      res
        .status(200)
        .json({ message: "200: Successful Get Users", data: users });
    }
  } else {
    res.status(405).json({ message: "405: Method Not Allow" });
  }
}
