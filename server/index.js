require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Resend } = require("resend"); // Importamos Resend

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Inicializamos Resend con la variable de entorno
const resend = new Resend(process.env.RESEND_API_KEY);

app.get("/", (req, res) => {
  res.send("El servidor de seguros (con Resend) está funcionando 🚀");
});

app.post("/api/cotizar", async (req, res) => {
  const { fullName, email, phone, insuranceType, details } = req.body;

  try {
    const data = await resend.emails.send({
      // IMPORTANTE: Si no tienes dominio propio verificado en Resend,
      // DEBES usar este correo de prueba obligatoriamente:
      from: "onboarding@resend.dev",

      // Aquí pon TU correo donde quieres recibir las alertas
      to: process.env.EMAIL_DESTINO,

      subject: `Nueva Cotización: ${insuranceType} - ${fullName}`,
      html: `
        <h2>Nueva solicitud de cotización</h2>
        <p><strong>Cliente:</strong> ${fullName}</p>
        <p><strong>Email de contacto:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Tipo de Seguro:</strong> ${insuranceType}</p>
        <p><strong>Detalles:</strong></p>
        <p>${details}</p>
      `,
    });

    console.log("Correo enviado:", data);
    res.status(200).json({ message: "Correo enviado correctamente" });
  } catch (error) {
    console.error("Error enviando correo:", error);
    res.status(500).json({ message: "Error al enviar el correo" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
