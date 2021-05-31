import './best.scss';

import { BaseComponent } from '../base-component';
import { router } from '../../router';
import { Form } from '../registration-form/form';
import { userService } from '../../services/user-service/user-service';
const UserService = new userService();

export class Best extends BaseComponent {
  constructor() {
    super('div', ['best']);
    let mainDiv = document.createElement('div');
    mainDiv.classList.add('bestPage');
    this.element.appendChild(mainDiv);
    let header = document.createElement('h2');
    header.innerText = 'best players';
    mainDiv.appendChild(header);
    this.getPlayer();
    this.getName();
  }
  async getPlayer(){
    debugger;
    // const newArray = [];
    const bestPage = document.querySelector('.bestPage');
    const array = await UserService.getTopPlayers();
    if(array)
    console.log(array)
    return array;

    }
    async getName(){
      const array:Array<any> = [];
      const bestPage = document.querySelector('.bestPage');
      const a =  new Promise((res, rej) => {
        const array = this.getPlayer();
        if (array) {
            res(array);
            for(let i = 0; i < 10; i++){

            };
        } else {
          rej();
          console.log('nosuccess')
        }
      });
      a.then(
        result =>  array.push(result),
      )
      const b = array.pop()
      console.log(b)
      // for(let i = 0; i < 10; i++){
      //   console.log(array);
      // // let player = document.createElement('div');
      // // let playerName =document.createElement('h3');
      // // let playerEmail =document.createElement('p');
      // // let playerScore =document.createElement('p');
      // // playerName.innerText = `${array[i][i].firstname}`
      // // playerEmail.innerText = `${array[i][i].email}`
      // // playerScore.innerText = `${array[i][i].score}`
      // // player.appendChild(playerName);
      // // player.appendChild(playerEmail);
      // // player.appendChild(playerScore);
      // // bestPage?.appendChild(player);
      // }
    }
  }

