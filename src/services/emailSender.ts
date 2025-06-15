
import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
import { emailTemplate } from '../templates/emailTemplate';

dotenv.config();

export async function sendEmail(content: { nome: string; previsao: string }[]) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_FROM,
            pass: process.env.EMAIL_PASS,
        },
    });

    await transporter.sendMail({
        from: `"AstroBoletim" <${process.env.EMAIL_FROM}>`,
        to: process.env.EMAIL_TO,
        subject: '☀️ Previsão do seu dia pelos Astros',
        html: emailTemplate(content),
    });

    console.log('Email enviado com sucesso!');
}
