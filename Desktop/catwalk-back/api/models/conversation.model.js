import mongoose from "mongoose";
const { Schema } = mongoose;

const conversationSchema = new Schema(
  {
    id:{
      type: String,
      required: true,
      unique: true,
    },
    id:{
      type: String,
      required: true,
      unique: true,
    },
    id:{
      type: String,
      required: true,
      unique: true,
    },
    id:{
      type: String,
      required: true,
      unique: true,
    },
    id:{
      type: String,
      required: true,
      unique: true,
    },
    
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Conversation", conversationSchema);
