import asyncHandler from "express-async-handler";
import User from "../Models/UserModel.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../middlewares/Auth.js";
//@desc register user
//@route POST /api/users/
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, password, image } = req.body;
  try {
    const userExists = await User.findOne({ email });
    //check user exists
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create new user in DB
    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
      image,
    });
    //  if user created successfully send user data and token to client
    if (user) {
      res.status(201).json({
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        image: user.image,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//login user
//route//post/users/login
//access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    //find user in DB
    const user = await User.findOne({ email });
    //if user exist compare password with hashpassword and send user data and token to client
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        image: user.image,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    }
    //if user not found or password not match send error message
    else {
      res.status(401);
      throw new Error("Invalid email or password");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//****Private Controller
//update user profile
//route//post/users/profile
// access private
const updateUserProfile = asyncHandler(async (req, res) => {
  const { fullName, email, image } = req.body;
  try {
    //find user in DB
    const user = await User.findById(req.user._id);

    //if user exist update user data and save it in database

    if (user) {
      user.fullName = fullName || user.fullName;
      user.email = email || user.email;
      user.image = image || user.image;
      const updatedUser = await user.save();
      //send updated user data and token  to client
      res.json({
        _id: updatedUser._id,
        fullName: updatedUser.fullName,
        email: updatedUser.email,
        image: updatedUser.image,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser._id),
      });
    }
    //else
    else {
      res.status(404);
      throw new Error("User not found");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
//Delete user Profile
// Delete /api/users
const deleteUserProfile = asyncHandler(async (req, res) => {
  try {
    //find user in DB
    const user = await User.findById(req.user._id);

    //if user exist delete user data and save it in database

    if (user) {
      //if user is admin throw error message
      if (user.isAdmin) {
        res.status(400);
        throw Error("Admin user can't be deleted");
      }

      //else delete user
      await user.remove();
      res.json({ message: "User deleted successefully" });
    }

    //else send error message
    else {
      res.status(404);
      throw new Error("User not found");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
//change user password
//PUT/api/users/password
const changeUserPassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  try {
    //find user in DB
    const user = await User.findById(req.user._id);

    //if user exist compare oldPassword with password then update user password user  and save it in database
    if (user && (await bcrypt.compare(oldPassword, user.password))) {
      //hash new password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);
      user.password = hashedPassword;
      await user.save();
      res.json({ message: "Password changed " });
    }

    //else send error message
    else {
      res.status(404);
      throw new Error("Invalid old password");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
//Get all liked movies
//Get/api/users/favourites
const getLickedMovies = asyncHandler(async (req, res) => {
  try {
    //find user in DB
    const user = await User.findById(req.user._id).populate("likedMovies");

    //if user exist compare oldPassword with password then update user password user  and save it in database
    if (user) {
      res.json(user.likedMovies);
    }

    //else send error message
    else {
      res.status(404);
      throw new Error("User not found");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
//add movie to licked movies
//POST/api/users/favourits
const addLickedMovies = asyncHandler(async (req, res) => {
  const { movieId } = req.body;

  try {
    //find user in DB
    const user = await User.findById(req.user._id);

    //if user exist compare oldPassword with password then update user password user  and save it in database
    if (user) {
      //ckeck if movie already licked
     

      //if already licked send error message
      if (user.lickedMovies.includes(movieId)) {
        res.status(400);
        throw new Error("Movie Already Licked");
      }
      //else add movie to licked movies and save it
      user.lickedMovies.push(movieId);
      await user.save();
      res.json(user.lickedMovies);
    }
    //  else send error message
    else {
      res.status(404);
      throw new Error("Movie  not found");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
export {
  registerUser,
  loginUser,
  updateUserProfile,
  deleteUserProfile,
  changeUserPassword,
  getLickedMovies,
  addLickedMovies
};
