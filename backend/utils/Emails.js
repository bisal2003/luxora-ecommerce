const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  tls: {
    rejectUnauthorized: false
  }
});

exports.sendMail = async(receiverEmail,subject,body) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL,
      to: receiverEmail,
      subject: subject,
      html: body
    });
    console.log('Email sent successfully:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error.message);
    throw new Error(`Failed to send email: ${error.message}`);
  }
};
