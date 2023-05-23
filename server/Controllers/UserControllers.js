import asyncHandler from "express-async-handler";
import User from "../Models/UserModel.js";
import bcrypt from "bcryptjs";
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
    // else 
    res.status(201).json({
      fullName,
        email,
        password,
        image,
    })

     //hash password
    //  const salt = await bcrypt.genSalt(10);
    //  const hashedPassword = await bcrypt.hash(password, salt);

  
     //  create new user in DB 
    // const user = await User.create({
    //   fullName,
    //   email,
    //   password: hashedPassword,
    //   image,
    // });
     //if user created successfully send user data and token to client
    // if (user) {
    //   res.status(201).json({
    //     _id: user._id,
    //     fullName: user.fullName,
    //     email: user.email,
    //     image: user.image,
    //     isAdmin: user.isAdmin,
    //     token: generateToken(user._id),
    //   });
    // }
    // else{
    //    res.status(400);
    //    throw new Error('Invalid user data'); 
    // }
  } catch (error) {}
});
export { registerUser };
