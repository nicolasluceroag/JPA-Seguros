require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.get("/", (req, res) => {
  res.send("El servidor de seguros está funcionando 🚀");
});

app.post("/api/cotizar", async (req, res) => {
  const { fullName, email, phone, insuranceType, details } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Nueva Cotización: ${insuranceType} - ${fullName}`,
    html: `
      <h2>Nueva solicitud de cotización</h2>
      <p><strong>Cliente:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${phone}</p>
      <p><strong>Tipo de Seguro:</strong> ${insuranceType}</p>
      <p><strong>Detalles:</strong></p>
      <p>${details}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Correo enviado con éxito");
    res.status(200).json({ message: "Correo enviado correctamente" });
  } catch (error) {
    console.error("Error enviando correo:", error);
    res.status(500).json({ message: "Error al enviar el correo" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
