import './form.scss';
import { BaseComponent } from '../base-component';
import { User } from '../../models/user';
import { userService } from '../../services/user-service/user-service';
import { About } from '../about/about';
const UserService = new userService();

export class Form extends BaseComponent {
  constructor() {
    super('div', ['form']);
    let registerForm = document.createElement('div');
    let innerForm = document.createElement('div');
    let inputs = document.createElement('div');
    let img = document.createElement('img');
    let name = document.createElement('p');
    let header = document.createElement('h2');
    header.classList.add('header-form')
    header.innerText = 'Register new player'
    name.innerText = 'Your name'
    let lastName = document.createElement('p');
    lastName.innerText = 'Your Last name'
    let email = document.createElement('p');
    email.innerText = 'email'
    inputs.classList.add('inputs')
    innerForm.classList.add('form-inner');
    registerForm.classList.add('foorm');
    this.element.appendChild(registerForm)
    let inputName = document.createElement("input");
    inputName.setAttribute('type', 'text');
    inputName.setAttribute('id', 'fname');
    inputName.classList.add('input-element')
    let inputLastName = document.createElement("input");
    inputLastName.setAttribute('type', 'text');
    inputLastName.setAttribute('id', 'lname');
    inputLastName.classList.add('input-element')
    let inputEmail = document.createElement("input");
    inputEmail.setAttribute('type', 'text');
    inputEmail.setAttribute('id', 'email');
    inputEmail.classList.add('input-element')
    inputs.appendChild(name);
    inputs.appendChild(inputName);
    inputs.appendChild(lastName);
    inputs.appendChild(inputLastName);
    inputs.appendChild(email);
    inputs.appendChild(inputEmail);
    innerForm.appendChild(inputs);
    innerForm.appendChild(img);
    registerForm.appendChild(header);
    registerForm.appendChild(innerForm);
    let button = document.createElement('button');
    button.classList.add('submit')
    button.innerText = 'Add User'
    registerForm.append(button);
    let buttonCancel = document.createElement('button');
    buttonCancel.classList.add('cancel')
    buttonCancel.innerText = 'Cancel'
    registerForm.append(buttonCancel);
  }
  formSubmit() {
    let validated = 'false';
    const fname: any = document.getElementById('fname');
    const lname: any = document.getElementById('lname');
    const email: any = document.getElementById('email');
    if (fname.value.match('[a-zA-Z]+') && lname.value.match('[a-zA-Z]+') && email.value.match('^.+@.+\..+$')) {
      UserService.create(fname.value, lname.value, email.value);
      validated = 'true';
      if(validated === 'true'){
        this.deleteSubmit();
      }
      return true
    }

  }
  deleteSubmit(){
    const form = document.querySelector('.form');
      form?.remove();
  }
}
