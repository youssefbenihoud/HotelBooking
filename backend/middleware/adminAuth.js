import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
    const {token} = req.headers;
    if (!token) {
        return res.json({success: false, message: "Not authorized. Login again."});
    }
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        if (token_decode.id === "admin") {
            next();
        } else {
            res.json({success: false, message: "Not authorized."});
        }
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"});
    }
}

export default adminAuth;
