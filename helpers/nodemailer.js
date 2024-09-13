const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: process.env.GMAIL_USER_NODEMAILER,
      pass: process.env.GMAIL_PASS_NODEMAILER,
    },
})

module.exports= transporter