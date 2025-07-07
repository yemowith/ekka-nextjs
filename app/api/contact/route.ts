export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json()
    console.log(process.env.SMTP_HOST)

    // Configure your SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // SSL
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Compose the email
    const mailOptions: Mail.Options = {
      from: process.env.SMTP_USER, // your authenticated/verified sender
      to: process.env.CONTACT_RECEIVER_EMAIL || 'edundar@ekkaholding.com.tr',
      replyTo: email, // user's email
      subject: `İletişim Formu: ${subject}`,
      text: `Ad Soyad: ${name}\nE-posta: ${email}\nTelefon: ${phone}\nKonu: ${subject}\nMesaj: ${message}`,
      html: `
    <h2>Yeni İletişim Formu Mesajı</h2>
    <p><strong>Ad Soyad:</strong> ${name}</p>
    <p><strong>E-posta:</strong> ${email}</p>
    <p><strong>Telefon:</strong> ${phone}</p>
    <p><strong>Konu:</strong> ${subject}</p>
    <p><strong>Mesaj:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
  `,
    }

    try {
      // Send the email
      await transporter.sendMail(mailOptions)
    } catch (error) {
      console.error('Email sending error:', error)
      return NextResponse.json(
        {
          success: false,
          error: 'Email gönderilemedi. Lütfen tekrar deneyin.',
        },
        { status: 500 },
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, error: 'Mesaj gönderilemedi. Lütfen tekrar deneyin.' },
      { status: 500 },
    )
  }
}
