import mongoose from "mongoose";
const UserSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please add a full name"],
    },
    email: {
      type: String,
      required: [true, "Please add email"],
      unique:true,
       trim: true,
    },
    password: {
      type: String,
      required: [6, "Please add password"],
      minlength: [6, "password must be at least 6 characters"],
    },
    image: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    likedMovies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movies",
      },
    ],
  },

  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
