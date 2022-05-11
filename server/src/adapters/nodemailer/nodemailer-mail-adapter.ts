import noidemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = noidemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "dd87ebf596bdd7",
      pass: "fca16ce34f0044"
    }
});

//class responsavel por envio de email
export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({subject, body}: SendMailData) {
         await transport.sendMail({
        from: "Equipe Feedget <oi@feedget.com>",
        to: "Igor Rocha<igor082011@gmail.com>",
        subject,
        html: body
    })
    }
}