import nodemailer from "nodemailer";

export async function sendEmail(to: string, html: string) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  //   let testAccount = await nodemailer.createTestAccount();
  //   console.log("testAccount: ", testAccount);

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "sme7l6nkkw4rsycx@ethereal.email",
      pass: "NpXMsCcwH1faQwyXMK",
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Candice Han 👻" <welcome.chezcandy@gmail.com>', // sender address
    to, // list of receivers
    subject: "Change Password", // Subject line
    html,
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
