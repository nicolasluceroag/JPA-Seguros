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
  const {
    fullName,
    email,
    phone,
    dni, // Nuevo
    location, // Nuevo
    insuranceType,
    brand,
    modelYear,
    version,
    plate,
    hasGNC,
  } = req.body;

  // Solo creamos este HTML si el tipo de seguro es "Auto"
  let vehicleHtml = "";

  if (insuranceType === "Automotor") {
    vehicleHtml = `
      <div style="margin-top: 25px; border-top: 1px solid #eee; padding-top: 20px;">
        <h3 style="color: #2563eb; font-size: 18px; margin-bottom: 15px;">🚗 Datos del Vehículo</h3>
        <table style="width: 100%; border-collapse: collapse;">
           <tr style="border-bottom: 1px solid #eee;">
             <td style="padding: 8px 0; font-weight: bold; color: #555; width: 40%;">Marca:</td>
             <td style="padding: 8px 0; color: #333;">${brand || "-"}</td>
           </tr>
           <tr style="border-bottom: 1px solid #eee;">
             <td style="padding: 8px 0; font-weight: bold; color: #555;">Año:</td>
             <td style="padding: 8px 0; color: #333;">${modelYear || "-"}</td>
           </tr>
           <tr style="border-bottom: 1px solid #eee;">
             <td style="padding: 8px 0; font-weight: bold; color: #555;">Versión:</td>
             <td style="padding: 8px 0; color: #333;">${version || "-"}</td>
           </tr>
           <tr style="border-bottom: 1px solid #eee;">
             <td style="padding: 8px 0; font-weight: bold; color: #555;">Patente:</td>
             <td style="padding: 8px 0; color: #333;">${plate || "-"}</td>
           </tr>
           <tr style="border-bottom: 1px solid #eee;">
             <td style="padding: 8px 0; font-weight: bold; color: #555;">GNC:</td>
             <td style="padding: 8px 0; color: #333;">
               ${
                 hasGNC
                   ? '<span style="color:green; font-weight:bold;">SÍ</span>'
                   : "NO"
               }
             </td>
           </tr>
        </table>
      </div>
    `;
  }

  // 3. ARMAMOS EL HTML COMPLETO
  const emailHtml = `
    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f4f7; padding: 40px 20px; color: #333;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        
        <div style="background-color: #2563eb; padding: 30px; text-align: center;">
          <h2 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold;">Nueva Solicitud de Cotización</h2>
        </div>

        <div style="padding: 30px;">
          
          <h3 style="color: #333; font-size: 18px; margin-bottom: 15px; margin-top: 0;">👤 Datos Personales</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold; color: #555; width: 40%;">Nombre:</td>
              <td style="padding: 10px 0; color: #333;">${fullName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold; color: #555;">DNI:</td>
              <td style="padding: 10px 0; color: #333;">${dni}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold; color: #555;">Localidad:</td>
              <td style="padding: 10px 0; color: #333;">${location}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 10px 0; color: #333;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold; color: #555;">Teléfono:</td>
              <td style="padding: 10px 0; color: #333;">${phone}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold; color: #555;">Interés:</td>
              <td style="padding: 10px 0; color: #333;">
                <span style="background-color: #e0f2fe; color: #0369a1; padding: 4px 8px; border-radius: 4px; font-size: 14px; font-weight: 600;">${insuranceType}</span>
              </td>
            </tr>
          </table>

          ${vehicleHtml}

        </div>
        
        <div style="background-color: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #888;">
          Este correo fue enviado automáticamente desde tu sitio web.
        </div>

      </div>
    </div>
  `;

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.EMAIL_DESTINO,
      subject: `📢 Cotización: ${insuranceType} - ${fullName}`,
      html: emailHtml,
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
