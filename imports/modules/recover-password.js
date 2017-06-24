import $ from 'jquery';
import 'jquery-validation';
import { Accounts } from 'meteor/accounts-base';
import { Bert } from 'meteor/themeteorchef:bert';

let component;

const handleRecovery = () => {
  Accounts.forgotPassword({
    email: document.querySelector('[name="emailAddress"]').value,
  }, (error) => {
    if (error) {
      Bert.alert(error.reason, 'warning');
    } else {
      Bert.alert('Revisa tu correo electrónico', 'success');
    }
  });
};

const validate = () => {
  $(component.refs.recoverPassword).validate({
    rules: {
      emailAddress: {
        required: true,
        email: true,
      },
    },
    messages: {
      emailAddress: {
        required: 'Necesita su Correo Electrónico.',
        email: 'Is this email address legit?',
      },
    },
    submitHandler() { handleRecovery(); },
  });
};

export default function handleRecoverPassword(options) {
  component = options.component;
  validate();
}
