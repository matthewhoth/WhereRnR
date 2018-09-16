import * as nodemailer from "nodemailer";

export const sendEmail = async (
  recipient: string,
  url: string,
  linkText: string
) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "slt5y2ea45fxw3dw@ethereal.email",
      pass: "hWuDnv25zX4cBr1AxJ"
    }
  });

  const message = {
    from: "Sender Name <sender@example.com>",
    to: `Recipient <${recipient}>`,
    subject: "Nodemailer is unicode friendly ✔",
    text: "Hello to myself!",
    html: `<html>
        <body>
        <p>Testing SparkPost - the world's most awesomest email service!</p>
         <a href="${url}">${linkText}</a>
        </body>
        </html>`
  };
};
