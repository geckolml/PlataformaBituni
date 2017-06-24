import $ from 'jquery';
import 'jquery-validation';
import { browserHistory } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import { Bert } from 'meteor/themeteorchef:bert';

let component;

const getUserData = () => ({
  email: document.querySelector('[name="emailAddress"]').value,
  password: document.querySelector('[name="password"]').value,
  profile: {
    name: {
      first: document.querySelector('[name="firstName"]').value,
      last: document.querySelector('[name="lastName"]').value,
    },
  },



  //id_steam:document.querySelector('[name="id_steam"]').value,
});

const signup = () => {
  const user = getUserData();

  Accounts.createUser(user, (error) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      browserHistory.push('/');
      Bert.alert('Bienvenido!', 'success');
    }
  });
};

const validate = () => {
  $(component.refs.signup).validate({
    rules: {
      firstName: {
        required: true,
      },
      lastName: {
        required: true,
      },
      emailAddress: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 6,
      },

    },
    messages: {
      firstName: {
        required: 'Nombres? ',
      },
      lastName: {
        required: 'Apellidos ?',
      },
      emailAddress: {
        required: 'Necesita su Correo Electrónico.',
        email: 'Is this email address legit?',
      },
      password: {
        required: 'Necesita su contraseña.',
        minlength: 'Usa al menos 6 caracteres, porfavor.',
      },

    },
    submitHandler() { signup(); },
  });
};

export default function handleSignup(options) {
  component = options.component;
  validate();
}
