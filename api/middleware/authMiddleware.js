const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.protect = async (req, res, next) => {
  try {
    // Token'ı kontrol et
    if (!req.headers.authorization?.startsWith('Bearer')) {
      return res.status(401).json({ message: 'Token bulunamadı' });
    }

    // Token'ı ayıkla
    const token = req.headers.authorization.split(' ')[1];

    // Token'ı doğrula
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Kullanıcıyı bul
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(401).json({ message: 'Kullanıcı bulunamadı' });
    }

    // Kullanıcıyı request nesnesine ekle
    req.user = user;
    next();
  } catch (error) {
    console.error('Auth Middleware Error:', error);
    res.status(401).json({ message: 'Yetkisiz erişim' });
  }
};

exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.userType)) {
      return res.status(403).json({ 
        message: `${req.user.userType} rolü bu işlem için yetkili değil` 
      });
    }
    next();
  };
};