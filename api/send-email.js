const nodemailer = require("nodemailer");

export default async (req, res) => {
  const { firstName, lastName, email, type, comment } = req.body;

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: process.env.WEBSITE_EMAIL_ADDRESS,
        pass: process.env.WEBSITE_EMAIL_PASSWORD,
    },
    secure: true,
  });

  try {
    await new Promise((resolve, reject) => {
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log("Server is ready to take our messages");
          resolve(success);
        }
      });
    });

    const mailData = {
      from: {
        name: `${firstName} ${lastName}`,
        address: process.env.WEBSITE_EMAIL_ADDRESS,
      },
      replyTo: email,
      to: 'bldcxt@gmail.com', // Recipient's email
      subject: `Form message from ${firstName} ${lastName}`,
      text: comment,
      html: `<p>Type: ${type}. Message: ${comment}</p>`, // Convert the message to HTML for email
    };

    await new Promise((resolve, reject) => {
      transporter.sendMail(mailData, (err, info) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          console.log(info);
          resolve(info);
        }
      });
    });

    res.status(200).json({ status: "OK", message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ status: "ERROR", message: "Failed to send email." });
  }
};
