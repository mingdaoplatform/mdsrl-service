import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  id: String,
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
      id: String,
      author: String,
      author_id: String,
      content: String,
      floor: String,
      delete: Boolean,
      last_update: String,
      created_time: String,
    },
  ],
  collect: Number,
  delete: Boolean,
  last_reply: String,
  last_update: String,
  created_time: String,
});

export default mongoose.models.post || mongoose.model("post", PostSchema);
