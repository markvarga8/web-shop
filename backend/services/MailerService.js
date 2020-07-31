const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'webshop266@gmail.com',
    pass: 'Secret123456',
  },
});

const send = (to, subject, text) => {
  const mailOptions = {
    from: 'webshop266@gmail.com',
    cc: 'webshop266@gmail.com',
    to,
    subject,
    text,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
};

module.exports = {
  send,
};
