const nodemailer = require("nodemailer");

async function sendEmail(to, subject, text) {

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "ongsomosmas.demo@gmail.com",
            pass: process.env.NODEMAILER_API_KEY,
        },
    });

    let info = await transporter.sendMail({
        from: "ongsomosmas.demo@gmail.com", 
        to: to, 
        subject: subject, 
        text: text, 
    });

}

module.exports = {sendEmail}
