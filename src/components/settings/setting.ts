import './setting.scss';

import { BaseComponent } from '../base-component';
import { router } from '../../router';
import { Form } from '../registration-form/form';
import { userService } from '../../services/user-service/user-service'
import { Game } from '../game/game';
import { App } from '../../app';
import { User } from '../../models/user';
const UserService = new userService();
const form = new Form();
export let check = false;

export class Settings extends BaseComponent {
  constructor() {
    super('div', ['settings']);
    let sectorDiff = document.createElement('select');
    let easyOption = document.createElement('option');
    easyOption.innerText = 'easy';
    easyOption.classList.add('option');
    let mediumOption = document.createElement('option');
    mediumOption.innerText = 'medium';
    mediumOption.classList.add('option');
    let hardOption = document.createElement('option');
    hardOption.innerText = 'hard';
    hardOption.classList.add('option');
    sectorDiff.classList.add('select');
    sectorDiff.appendChild(easyOption);
    sectorDiff.appendChild(mediumOption);
    sectorDiff.appendChild(hardOption);
    this.element.appendChild(sectorDiff);
    this.diffHandler();

  }
  // public changeOption(select:any){
  //   let choise:HTMLOptionElement = document.querySelector('.select')[0].va;
  //   console.log(choise.options)
  // }

  getDiff() {
    const chosenDiff = document.querySelector('.select') as HTMLSelectElement;
    var selectedOption = chosenDiff.selectedIndex;
    return selectedOption;
  }
  changeDiff() {

    UserService.updateUserDiff(this.getDiff());
  }
  diffHandler() {
    const chosenDiff = this.element.querySelector('.select') as HTMLSelectElement;
    chosenDiff.addEventListener('change', this.changeDiff.bind(this));
  }
}

