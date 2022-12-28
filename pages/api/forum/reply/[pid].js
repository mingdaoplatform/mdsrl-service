export default function handler(req, res) {
  res.status(200).json({ path: "/api/forum/reply/:id" });
}
