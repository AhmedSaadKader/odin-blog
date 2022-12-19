import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "user" },
    body: { type: String, required: true },
    published: { type: Boolean, default: true },
    comments: [{ type: Schema.Types.ObjectId, ref: "comment" }],
  },
  { timestamps: true }
);

export default mongoose.model("Post", PostSchema);
