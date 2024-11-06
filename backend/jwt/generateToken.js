import jwt from "jsonwebtoken";

const createTokenAndSaveCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
    expiresIn: "100d",
  });
  res.cookie("jwt", token, {
    httpOnly: true, // xss attacks se bachayega
    // secure: false, // set true when using this only in the production mode in https
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "None", // csrf attacks se bachayega
  });
};
export default createTokenAndSaveCookie;
