import $ from 'jquery';
import 'jquery-validation';
import { browserHistory } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
import { Bert } from 'meteor/themeteorchef:bert';

let component;
let token;

const handleReset = () => {
  const password = document.querySelector('[name="newPassword"]').value;
  Accounts.resetPassword(token, password, (error) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      browserHistory.push('/');
      Bert.alert('Contraseña reiniciada', 'success');
    }
  });
};

const validate = () => {
  $(component.refs.resetPassword).validate({
    rules: {
      newPassword: {
        required: true,
        minlength: 6,
      },
      repeatNewPassword: {
        required: true,
        minlength: 6,
        equalTo: '[name="newPassword"]',
      },
    },
    messages: {
      newPassword: {
        required: 'Ingrese la nueva contraseña porfavor.',
        minlength: 'Use at least six characters, please.',
      },
      repeatNewPassword: {
        required: 'Repite la nueva contraseña porfavor.',
        equalTo: 'Las contraseña no coinciden. Inténtelo nuevamente',
      },
    },
    submitHandler() { handleReset(); },
  });
};

export default function handleResetPassword(options) {
  component = options.component;
  token = options.token;
  validate();
}
