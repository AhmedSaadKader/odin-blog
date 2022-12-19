import mongoose, { mongo, Schema } from "mongoose";

const CommentSchema = new Schema(
  {
    text: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "user", required: true },
    post: { type: Schema.Types.ObjectId, ref: "post", required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Comment", CommentSchema);
