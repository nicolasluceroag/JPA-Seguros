require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configurado para tu dominio de Vercel
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:5173",
      "https://jpa-seguros.vercel.app", // Tu dominio principal
      /\.vercel\.app$/, // Permite todos los subdominios de Vercel
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

// Transporter de nodemailer con configuración más robusta
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Debe ser una Contraseña de Aplicación
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Verificar conexión al iniciar (útil para debugging)
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Error en configuración de email:", error);
  } else {
    console.log("✅ Servidor de email listo");
  }
});

app.get("/", (req, res) => {
  res.send("El servidor de seguros está funcionando 🚀");
});

app.post("/api/cotizar", async (req, res) => {
  console.log("📧 Recibiendo solicitud de cotización...");
  console.log("Datos recibidos:", req.body);

  const { fullName, email, phone, insuranceType, details } = req.body;

  // Validación básica
  if (!fullName || !email || !phone || !insuranceType) {
    return res.status(400).json({
      message: "Faltan datos obligatorios",
    });
  }

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
      <p>${details || "Sin detalles adicionales"}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Correo enviado con éxito");
    res.status(200).json({ message: "Correo enviado correctamente" });
  } catch (error) {
    console.error("❌ Error enviando correo:", error);
    res.status(500).json({
      message: "Error al enviar el correo",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});
