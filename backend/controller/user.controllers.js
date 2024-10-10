import User from "../models/user.models.js";

export const signup = (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }
    const user = User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const newUser = new User({
      name,
      email,
      password,
      confirmPassword,
    });
    newUser
      .save()
      .then(() => res.json({ message: "User registered successful" }));
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
