import jwt from "jsonwebtoken";

const createTokenAndSaveCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_TOKEN, {
    expiresIn: "100d",
  });
  console.log("Token from jwt file: ", token);
  res.cookie("jwt", token, {
    httpOnly: true, // xss attacks se bachayega
    // secure: process.env.NODE_ENV === "production",
    secure: true,
    // path: "/",
    sameSite: "Strict", // csrf attacks se bachayega   // use it only locally
    // sameSite: "Lax",          /// use it locally
    // sameSite: "None", // All users will not come
  });
};
export default createTokenAndSaveCookie;
