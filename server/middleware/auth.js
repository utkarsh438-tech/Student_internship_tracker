const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer')) {
    try {
      const token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch {
      return res.status(401).json({ message: 'Invalid or expired token' });
    }
  } else {
    return res.status(401).json({ message: 'No token provided' });
  }
};

const ccpdOnly = (req, res, next) => {
  if (req.user && req.user.role === 'ccpd_admin') {
    next();
  } else {
    res.status(403).json({ message: 'CCPD Admins only' });
  }
};

module.exports = { protect, ccpdOnly }; // ✅ Correct export
