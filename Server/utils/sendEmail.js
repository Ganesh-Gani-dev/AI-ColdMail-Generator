import nodemailer from 'nodemailer';
const sendEmail = async (options) => {
    if(!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.log('Email credentials are not set in environment variables');
        return;
    }
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });


  const mailOptions = {
    from : process.env.EMAIL_USER,
    to: options.email,
    subject: options.subject,
    text: options.message,
    html : '<p> ${options.text} </p>'
    };
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${options.email}`);
};

export default sendEmail;