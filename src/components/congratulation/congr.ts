import './congr.scss';
import { BaseComponent } from '../base-component';
import { User } from '../../models/user';
import { userService } from '../../services/user-service/user-service';
import { Game } from '../game/game';
import { router } from '../../router';
import { Best } from '../best/best';
import { App } from '../../app';
const UserService = new userService();

export class Alert extends BaseComponent {
  constructor() {
    super('div', ['congr']);
    const alerts = document.createElement('div');
    const buttonAlerts = document.createElement('button');
    buttonAlerts.innerText = `Okay`
    buttonAlerts.classList.add('buttonOkay');
    alerts.classList.add('alert');
    this.element.append(alerts);
    alerts.append(buttonAlerts);
    const appElement = document.getElementById('app');
    appElement?.append(this.element);;
    buttonAlerts.addEventListener('click', function () {
      const game = document.querySelector('.game');
      console.log(game)
      const alert = document.querySelector('.congr');
      alert?.remove();
      router.navigate('/score');
    })
}
  alertScore(score:number){
    const alert = this.element.getElementsByClassName('alert')[0];
    const newAlert = document.createElement('p');
    newAlert.innerText = `congratulation ${score}`
    alert.appendChild(newAlert);
  }
}
