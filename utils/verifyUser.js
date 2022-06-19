const jwt = require("jsonwebtoken");
async function verifyUser(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }
  try {
    const decoded = jwt.verify(token, "APP_SECRET");
    if (!decoded) {
      return res.status(401).json({ error: "Invalid token" });
    } else {
      req.user = decoded;
      next();
    }
  } catch (e) {
    return res.status(401).json({ error: "Invalid token" });
  }
}
module.exports = verifyUser;
