import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
  category: String,
  subject: String,
  solved: Boolean,
  author: String,
  author_id: String,
  like: Number,
  reply: [
    {
      author: String,
      author_id: String,
      content: String,
      floor: String,
      time: String,
    },
  ],
  collect: Number,
  last_update: String,
  created_time: String,
});

export default mongoose.models.post || mongoose.model("post", PostSchema);
