import './about.scss';

import { BaseComponent } from '../base-component';

export class About extends BaseComponent {
  constructor() {
    super('div', ['about']);
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('aboutPage');
    this.element.appendChild(mainDiv);
    const image = document.createElement('img');
    image.classList.add('image');
    // image.setAttribute('src', '../../../grapefruit-slice-332-332.jpg');
    mainDiv.appendChild(image);
  }
}
