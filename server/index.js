require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.get("/", (req, res) => {
  res.send("El servidor de seguros (con Resend) está funcionando 🚀");
});

app.post("/api/cotizar", async (req, res) => {
  const { fullName, email, phone, insuranceType, details } = req.body;

  // Diseño HTML del correo
  const emailHtml = `
    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f4f7; padding: 40px 20px; color: #333;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        
        <div style="background-color: #2563eb; padding: 30px; text-align: center;">
          <h2 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold;">Nueva Solicitud de Cotización</h2>
        </div>

        <div style="padding: 30px;">
         
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold; color: #333; width: 40%;">Cliente:</td>
              <td style="padding: 10px 0; color: #555;">${fullName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold; color: #333;">Email:</td>
              <td style="padding: 10px 0; color: #555;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold; color: #333;">Teléfono:</td>
              <td style="padding: 10px 0; color: #555;">${phone}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold; color: #333;">Tipo de Seguro:</td>
              <td style="padding: 10px 0; color: #555;">
                <span style="background-color: #e0f2fe; color: #0369a1; padding: 4px 8px; border-radius: 4px; font-size: 14px; font-weight: 600;">${insuranceType}</span>
              </td>
            </tr>
          </table>

          <div style="background-color: #f9fafb; border-left: 4px solid #2563eb; padding: 15px; margin-top: 25px;">
            <p style="font-weight: bold; margin: 0 0 5px 0; color: #333;">Detalles adicionales:</p>
            <p style="margin: 0; font-style: italic;">${details}</p>
          </div>
        </div>

       
      </div>
    </div>
  `;

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.EMAIL_DESTINO,
      subject: `📢 Cotización: ${insuranceType} - ${fullName}`,
      html: emailHtml, // Usamos la variable con el HTML estilizado
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
