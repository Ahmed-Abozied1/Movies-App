import jwt from "jsonwebtoken";
import User from "../Models/UserModel.js";
import asyncHandler from "express-async-handler";

//@desc Auth enticated user & get token

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};
//protection middleware
const protect = asyncHandler(async (req, res, next) => {
  let token;
  //check if token existe in headers
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    //set token from Bearer token in header
    try {
      token = req.headers.authorization.splite(" ")[1];
      //veriefy token and get user id
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      //get user id fromdecode token
      req.user = await User.findById(decode.id).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.staus(401);
      throw Error("Not authorized,token Failed");
    }
  }
  //if token not exist  in headers then send error

  if (!token) {
    res.status(401);
    throw Error("Not authorizes, No token");
  }
});
export { generateToken, protect };
