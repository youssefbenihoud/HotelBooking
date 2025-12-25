import jwt from "jsonwebtoken";

const createToken = (id, secret) => {
  return jwt.sign({ id }, secret);
};

const loginAdmin = (req, res) => {
    const {email, password} = req.body;
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
        const token = createToken("admin", process.env.JWT_SECRET);
        res.json({success: true, token});
    } else {
        res.json({success: false, message: "Invalid credentials"});
    }
}

export { loginAdmin };