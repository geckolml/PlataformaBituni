import { Accounts } from 'meteor/accounts-base';

const name = 'BITUNI';
const email = '<bituni.uni@gmail.com>';
const from = `${name} ${email}`;
const emailTemplates = Accounts.emailTemplates;

emailTemplates.siteName = name;
emailTemplates.from = from;

emailTemplates.resetPassword = {
  subject() {
    return `[${name}] Reset Your Password`;
  },
  text(user, url) {
    const userEmail = user.emails[0].address;
    const urlWithoutHash = url.replace('#/', '');

    return `Se ha solicitado un restablecimiento de contraseña para la cuenta relacionada con esta dirección (${userEmail}). Para restablecer la contraseña, visite el siguiente enlace:
    \n${urlWithoutHash}\n Si no has solicitado este restablecimiento, ignora este correo electrónico. Si cree que algo está mal, comuníquese con nuestro equipo de soporte técnico:
    ${email}.`;
  },
};
