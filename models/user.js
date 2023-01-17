import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  id: String,
  name: String,
  mail: String,
  banner: String,
  avatar: String,
  gender: String,
  twofa: Boolean,
  description: String,
  like: Number,
  warn: Number,
  beta: Boolean,
  role: [String],
  delete: Boolean,
  premium: Number,
  badage: [String],
  disable: Boolean,
  post_count: Number,
  reply_count: Number,
  last_update: String,
  created_time: String,
  last_post_time: String,
  last_reply_time: String,
  first_time_name: String,
});

export default mongoose.models.user || mongoose.model("user", UserSchema);
