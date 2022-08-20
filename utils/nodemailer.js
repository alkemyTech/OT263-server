const nodemailer = require("nodemailer");

async function sendMail(to, subject, text) {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "ongsomosmas.demo@gmail.com",
            pass: "kaohxjkciqackpdj",
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: "ongsomosmas.demo@gmail.com", // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        text: text, // plain text body
    });

    console.log("Message sent: %s", info.messageId);
}

module.exports = sendMail;
