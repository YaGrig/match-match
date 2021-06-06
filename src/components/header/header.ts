import './header.scss';

import { BaseComponent } from '../base-component';
import { router } from '../../router';
import { Form } from '../registration-form/form';
import { UserService } from '../../services/user-service/user-service';
import { Timer } from '../timer/timer';

const userService = new UserService();
const form = new Form();
const timer = new Timer();

export class Header extends BaseComponent {
  public check = false;

  public fileInput = document.querySelector('.imgLoader');

  constructor() {
    super('header', ['header']);
    this.element.innerHTML =
    const logo = document.createElement('div');
    logo.classList.add('logo');
    const logo__text = document.createElement('p');
    logo__text.classList.add('logo__text');
    const logo__text_trans = document.createElement('p');
    logo__text_trans.classList.add('logo__text transparent');
    logo.appendChild('logo__text');
    this.element.appendChild('logo');
    const nav = document.createElement('nav');
    const link__about = document.createElement('div');
    link__about.classList.add('nav__link');
    link__about.setAttribute('data-route','/about')
    link__about.innerText = 'About Game';
    const span__about = document.createElement('span');
    span__about.classList.add('nav__icon info');
    link__about.appendChild(span__about);
    const link__score = document.createElement('div');
    link__score.classList.add('nav__link');
    link__score.setAttribute('data-route','/score')
    link__score.innerText = 'Best Score';
    const span__score = document.createElement('span');
    span__score.classList.add('nav__icon scores');
    link__score.appendChild(span__score);
    const link__setting = document.createElement('div');
    link__setting.classList.add('nav__link');
    link__setting.setAttribute('data-route','/setting');
    link__setting.innerText = 'Game Settings';
    const span__set = document.createElement('span');
    span__set.classList.add('nav__icon settings');
    link__setting.appendChild(span__set);
    const button = document.createElement('button');
    button.classList.add('btn', 'register-btn');
    if (this.check) {
      button.innerText = 'New Game';
    } else {
      button.innerText = 'register new player';
    }
    const image = document.createElement('div');
    image.classList.add('image-container');
    this.element.append(button);
    this.element.append(image);
    // this.fileInput?.addEventListener('change', this.LoadHandler);
    this.handleNavigation();
  }

  private handleNavigation(): void {
    this.element.addEventListener('click', (event) => {
      const eventTarget = event.target as HTMLDListElement;
      const selectedRoute = (eventTarget).getAttribute(
        'data-route',
      );
      if (eventTarget.classList.contains('register-btn')) {
        document.body.classList.add('body');
        this.element.append(new Form().element);
        userService.getTopPlayers();
      }
      if (eventTarget.classList.contains('game-btn')) {
        router.navigate('/game');
        this.check = true;
        this.changeButton();
      }
      if (eventTarget.classList.contains('stopGame-btn')) {
        console.log('>>>>');
        timer.stopTime();
        this.changeButton();
      }
      if (eventTarget.classList.contains('submit')) {
        if (form.formSubmit()) {
          document.body.classList.remove('body');
          this.changeButton();
        }
      }
      if (eventTarget.classList.contains('cancel')) {
        document.body.classList.remove('body');
        form.deleteSubmit();
      }
      if (selectedRoute) {
        this.check = false;
        this.changeButton();
        router.navigate(selectedRoute);
      }
    });
  }

  private changeButton(): void {
    const buttonReg = document.querySelector('.btn');
    if (buttonReg && this.check) {
      buttonReg?.classList.remove('game-btn');
      buttonReg?.classList.add('stopGame-btn');
      buttonReg.innerHTML = 'Stop Game';
    } else if (buttonReg && !this.check) {
      buttonReg?.classList.remove('register-btn');
      buttonReg?.classList.add('game-btn');
      buttonReg.innerHTML = 'New Game';
    }
  }
  // const image: HTMLImageElement = document.querySelector('.image');
  // image.crossOrigin = 'Anonymous';
  // image.onload = function() {
  //   let canvas = document.createElement('canvas');
  //   let ctx = canvas.getContext('2d');
  //   canvas.height = image.naturalHeight;
  //   canvas.width = image.naturalWidth;
  //   ctx?.drawImage(image,0,0);
  //   let data = canvas.toDataURL('image/jpeg');
  //   image.src = data;
  // }
}
