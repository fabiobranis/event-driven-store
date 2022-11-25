import { createTransport } from 'nodemailer';
import { MAIL_ADDRESS, SMTP_HOST, SMTP_PORT } from '../config.js';

const transporter = createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: false,
});

const sendMailMessage = async ({ to, subject, text }) => transporter.sendMail({
  from: MAIL_ADDRESS,
  to,
  subject,
  text,
});

export { sendMailMessage };
