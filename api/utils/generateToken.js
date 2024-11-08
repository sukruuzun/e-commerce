const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, userType: user.userType }, // kullanıcı id ve userType
    process.env.JWT_SECRET, // .env dosyasına ekleyeceğiniz gizli anahtar
    { expiresIn: "30d" }
  );
};

module.exports = generateToken;
