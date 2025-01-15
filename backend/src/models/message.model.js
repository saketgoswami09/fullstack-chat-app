import mongoose from "mongoose";

// User schema

const userSchema = new mongoose.Schema({
senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  text: {
    type: String,
  },
  image: {
    type: String,
  },
},
  { timestamps: true }
);

// Export the model 
const Message = mongoose.model("Message", userSchema);

export default Message;