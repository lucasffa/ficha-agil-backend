const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const { isTokenBlacklisted } = require('../utils/blacklist');

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'No token provided' });

  // Check if the token is blacklisted
  if (isTokenBlacklisted(token)) {
    return res.status(401).json({ message: 'Token is blacklisted' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Failed to authenticate token' });
    }
    req.userId = decoded.userId;
    next();
  });
}

module.exports = authenticateToken;
