const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'No token provided' });

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err){
      localStorage.setItem('token', '');
      return res.status(403).json({ message: 'Failed to authenticate token' });
    } 
    req.userId = decoded.userId;
    next();
  });
}

module.exports = authenticateToken;