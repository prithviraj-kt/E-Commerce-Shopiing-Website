import connectDb from "../../moddleware/mongoose";
import User from "../../models/User";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
const handler = async (req, res) => {
  if (req.method == "POST") {
    let user = await User.findOne({ email: req.body.email });
    const decryptPass = CryptoJS.AES.decrypt(
      user.password,
      "secret123"
    ).toString(CryptoJS.enc.Utf8);

    if (user) {
      if (req.body.email == user.email && req.body.password == decryptPass) {
        var token = jwt.sign(
          { email: user.email, name: user.name },
          "jwtsecret",
          {
            expiresIn: "2d",
          }
        );

        res.status(200).json({ success: true, token });
      } else {
        res.status(400).json({ success: false, error: "Invalid Credentials" });
      }
    } else {
      res.status(400).json({ success: false, error: "No user found" });
    }
    // if (u.email == req.body.email && u.password == decryptPass) {
    //   alert("YES");
    //   return res.status(200).json({ success: "Login Successful" });
    // } else {
    //   alert("NO");

    //   return res.status(400).json({ success: "Login Failed" });
    // }
  } else {
    res.status(400).json({
      error: "Error",
    });
  }
};

export default connectDb(handler);
