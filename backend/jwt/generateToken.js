import jwt from "jsonwebtoken";

const createTokenAndSaveCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
    expiresIn: "100d",
  });
  res.cookie("jwt", token, {
    httpOnly: true, // xss attacks se bachayega
    secure: false, // set true when using this only in the production mode in https
    sameSite: "strict", // csrf attacks se bachayega
  });
};
export default createTokenAndSaveCookie;
