import jwt from "jsonwebtoken";

const createTokenAndSaveCookie = (userId, res) => {
  const token = jwt.sign(userId, process.env.JWT_TOKEN, {
    expiresIn: "100d",
  });
  res.cookie("jwt", token, {
    httpOnly: true, // xss attacks se bachayega
    secure: true,
    sameSite: "strict", // csrf attacks se bachayega
  });
};
export default createTokenAndSaveCookie;
