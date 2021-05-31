import './timer.scss';
import { BaseComponent } from '../base-component';

export class Timer extends BaseComponent {
  private minute:number = 0;
  private hours:number = 0;
  private seconds:number = 0;
  constructor() {
    super('div', ['timer']);
    this.element.innerHTML = `
    <div class='timer'></div>
    `;
    this.startTimer()
  }
  startTimer(){
    const timer = document.querySelector('.timer');
    setInterval(() => {
      this.seconds += 1
      if(this.seconds === 60){
        this.minute +=1;
        this.seconds = 0;
      }
      if(this.minute === 60){
        this.hours +=1;
        this.minute = 0;
      }
      const timerNew = `<div>${this.hours}:${this.minute}:${this.seconds}</div>`;
      if(timer){
      timer.innerHTML = timerNew;
      }
    }, 1000);

  }
  getTime():number{
    const currentTime = this.seconds + this.minute * 60 + this.hours * 360;
    return currentTime;
  }
}
// June 1 2021 ${this.hours} ${this.minute} ${this.seconds}
