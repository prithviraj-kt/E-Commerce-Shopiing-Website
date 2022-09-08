import connectDb from "../../moddleware/mongoose";
import User from "../../models/User";
import CryptoJS from "crypto-js";
const handler = async (req, res) => {
  if (req.method == "POST") {
    const{name, email} = req.body
    let u = await new User({name, email, password: CryptoJS.AES.encrypt(req.body.password, "secret123").toString()});
    u.save();
    res.status(200).json({ success: "Success" });
  } else {
    res.status(400).json({
      error: "Error",
    });
  }
};

export default connectDb(handler);
