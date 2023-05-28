import nodemailer from "nodemailer"

const emailOlvidePassword = async (datos) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        },
      });

      const { email, nombre, token } = datos;
      
      //Enviar Email
      const info = await transporter.sendMail({
        from: "APV - Administrador de Pacientes de Veterinaria",
        to: email,
        subject: 'Reestablece tu constraseña',
        text: 'Reestablece tu constraseña',
        html: `<p>Hola ${nombre}, has solicitado reestablecer tu constraseña.</p>
        <p>Sigue el siguiente enlace para establecer una nueva contraseña:
        <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer contraseña</a></p>

        <p>Si tú no solicitaste el cambio, puedes ignorar  este mensaje</p>
        `
      });

      console.log("Mensaje enviado: %s", info.messageId);
}

export default emailOlvidePassword