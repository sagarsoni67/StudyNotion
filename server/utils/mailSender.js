const nodemailer = require("nodemailer")

const mailSender = async (email, title, body) => {
  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    })

    console.log("Email: ", email);
    console.log("title: ", title);

    let info = transporter.sendMail({
      from: `"Studynotion | CodeHelp" <${process.env.MAIL_USER}>`,
      to: `${email}`, 
      subject: `${title}`, 
      html: `${body}`, 
    }).catch((err)=>{
      console.log(`Eroor while sending mail: ${err}`)
    })
    console.log(`Info Log: ${info}`)
    return info
  } catch (error) {
    console.log(error.message)
    return error.message
  }
}

module.exports = mailSender
