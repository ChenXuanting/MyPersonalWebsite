const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'theospersonalwebsite@email.com',
      pass: process.env.WEBSITE_EMAIL_PASSWORD,
    },
  });

  const { firstName, lastName, email, type, comment } = req.body;

  const mailOptions = {
    from: 'theospersonalwebsite@email.com',
    to: 'bldcxt@example.com',
    subject: `New message from ${firstName} ${lastName}`,
    text: `Type: ${type}\nEmail: ${email}\nComment: ${comment}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).send({ error: 'Failed to send email' });
  }
};
