import nodemailer from "nodemailer";
import { Email_Host, Email_Port, Email_User, Email_pass } from "./config.js";
class EmailService {
  constructor() {
    this.transport = nodemailer.createTransport({
      host: Email_Host,
      port: Email_Port,
      auth: {
        user: Email_User,
        pass: Email_pass,
      },
    });
  }

  async sendWelcome(usuario) {
    const emailOptions = {
      from: Email_Host,
      to: usuario.email,
      subject: "Bienvenido ! ",
      text: ` Bienvenido al Centro De Escalada ${usuario.name} !   , Recibiras las mejores promociones y noticias ! 
        que tengas un buen dia.
            Saludos`,
    };
    await this.transport.sendMail(emailOptions);
  }
  async deleteUserEmail(emailUser) {
    const emailOptions = {
      from: Email_Host,
      to: emailUser,
      subject: "Borraste Tu Cuenta",
      html: `<p>
       Borraste tu cuenta de Proyect Escalada, Espero que volvamos a vernos pronto! `,
    };
    await this.transport.sendMail(emailOptions);
  }
  async enviarConsulta(usuario, body) {
    const emailOptions = {
      from: Email_Host,
      to: usuario.email,
      subject: "Consulta Enviada",
      html: `<p>
        La notificacion de ${usuario.name} - ${body.telefono} Fue enviada exitosamente:  ${body.mensaje}`,
    };
    await this.transport.sendMail(emailOptions);
  }
}

export const emailService = new EmailService();
