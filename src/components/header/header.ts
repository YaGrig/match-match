import './header.scss';

import { BaseComponent } from '../base-component';
import { router } from '../../router';
import { Form } from '../registration-form/form';
import { userService } from '../../services/user-service/user-service'
import {  Game } from '../game/game';
import { App } from '../../app';
import { Alert } from '../congratulation/congr';
const UserService = new userService();
const form = new Form();
// const game = new Game();
// export let check = false;

export class Header extends BaseComponent {
  public check = false;
  constructor() {
    super('header', ['header']);
    this.element.innerHTML = `
      <h1 style="display: none">Match-match game</h1>
      <div class="logo">
        <p class="logo__text">match</p>
        <p class="logo__text transparent">match</p>
      </div>
      <nav class="nav">
        <div class="nav__link" data-route="/about"><span class="nav__icon info"></span>About Game</div>
        <div class="nav__link" data-route="/score"><span class="nav__icon scores"></span>Best Score</div>
        <div class="nav__link" data-route="/settings"><span class="nav__icon settings"></span>Game Settings</div>
      </nav>`
      // <div>
      //   <button class="btn register-btn" id='register-btn'>register new player</button>
      //   <button class="btn game-btn off" id='game-btn'>New Game</button>
      // </div>
    ;
    let button = document.createElement('button');
    button.classList.add('btn','register-btn')
    if(this.check){
      button.innerText = 'New Game'
    } else {
      button.innerText = 'register new player'
    }
    this.element.append(button);
    this.handleNavigation();
  }

  private handleNavigation(): void {
    this.element.addEventListener('click', (event) => {

      const eventTarget = event.target as HTMLDListElement;
      let selectedRoute = (eventTarget).getAttribute(
        'data-route',
      );
      if (eventTarget.classList.contains('register-btn')) {
        document.body.classList.add('body');
        this.element.append(new Form().element);
        UserService.getTopPlayers();
      }
      if (eventTarget.classList.contains('game-btn')) {
        router.navigate('/game')
        this.changeButton();
      }
      if (eventTarget.classList.contains('submit')) {
        if(form.formSubmit()){
          document.body.classList.remove('body');
        this.changeButton();
        };
      }
      if (eventTarget.classList.contains('cancel')) {
        document.body.classList.remove('body');
        form.deleteSubmit();
        };
      if (selectedRoute) {
        console.log(selectedRoute);
        this.check = false;
        router.navigate(selectedRoute);
      }
    });
  }
  private changeButton(): void {
    const buttonReg = document.querySelector('.btn');
    if(buttonReg && this.check){
      buttonReg?.classList.remove('game-btn');
      buttonReg?.classList.add('stopGame-btn');
      buttonReg.innerHTML = 'Stop Game';
    }
    if(buttonReg && !this.check){
    buttonReg?.classList.remove('register-btn');
    buttonReg?.classList.add('game-btn');
    buttonReg.innerHTML = 'New Game';
    }
  }
}
