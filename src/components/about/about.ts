import './about.scss';

import { BaseComponent } from '../base-component';
import { router } from '../../router';
import { Form } from '../registration-form/form';


export class About extends BaseComponent {
  constructor() {
    super('div', ['about']);
    let mainDiv = document.createElement('div');
    mainDiv.classList.add('aboutPage');
    this.element.appendChild(mainDiv)
    let image = document.createElement('img');
    image.classList.add('image')
    image.setAttribute('src','../../../grapefruit-slice-332-332.jpg');
    mainDiv.appendChild(image);
  }
}
