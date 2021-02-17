const User = require("../modals/User");
const { registerValidation, loginValidation } = require("../validation");
const bcrypt = require("bcryptjs");
const HttpError = require("../modals/http-error");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res, next) => {
  // Doing Validation
  console.log(req.body)
  const { error } = registerValidation(req.body);
  if (error) {
    return next(new HttpError(error.details[0].message, 422));
  } 

  //Checking Email Duplication
  try {
    const alreadyExistEmail = await User.findOne({ email: req.body.email });
    if (alreadyExistEmail) {
      return next(
        new HttpError("Email already exists! Try Different One", 409)
      );
    }
  } catch (error) {
    return next(new HttpError("Something Went Wrong", 500));
  }

  //Checking if passwords are equal
  if(req.body.password !== req.body.confirmpassword){
    return next(new HttpError("Password must be the same!",422))
  }
  //Hashing the Password
  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(req.body.password, 12);
  } catch (error) {
    return next(new HttpError("Something Went Wrong", 500));
  }


  //Creating new User
  const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    return next(new HttpError(err.message, 500));
  }
};

exports.loginUser = async (req, res, next) => {
  //Doing Validation
  console.log(req.body)
  const { error } = loginValidation(req.body);
  if (error) {
    return next(new HttpError(error.details[0].message, 400));
  }

  //Checking if email is exist
  let emailExist;
  try {
    emailExist = await User.findOne({ email: req.body.email });
    if (!emailExist) {
      return next(new HttpError(`User with ${req.body.email} is not Exist!!`, 404));
    }
  } catch (error) {
    return next(new HttpError("Something Went Wrong", 500));
  }
  //Checking if password is correct
  try {
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      emailExist.password
    ); //order matters here ....(normalPass,hashedPass)
    if (!isPasswordCorrect) {
      return next(new HttpError("Entered Password is Incorrect!", 400));
    }
  } catch (error) {
    return next(new HttpError("Something Went Wrong", 500));
  }
  //Creating JsonWebToken
  const token = jwt.sign({ _id: emailExist._id }, process.env.SECRET_TOKEN, {
    expiresIn: "1h",
  });

  //Sending Response with token
  res.header("auth-token", token).status(200).json({data:"You are Logged In",token:token});
};
