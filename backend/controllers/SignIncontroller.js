const jwt = require('jsonwebtoken');
const User = require('../models/user');
const secrets = require('../config/secrets.json');

module.exports = {
  signIn: async (req, res) => {
    const user = await User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password,
      },
    });
    if (user) {
      const token = jwt.sign({ userId: user.id }, secrets.jwtSecret);
      res.json({
        token
      });
    } else {
      res.status(401).json({ error: 'Invalid email/password or not verified user' });
    }
  },
};
