import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  //time of creation and updati0on of the user -> {timestamps:true}
  { timestamps: true }
);

//
const User = mongoose.model("User", userSchema);
export default User;
