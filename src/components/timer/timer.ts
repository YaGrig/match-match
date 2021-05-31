import './timer.scss';
import { BaseComponent } from '../base-component';

export class Timer extends BaseComponent {
  private minute = 0;

  private hours = 0;

  private seconds = 0;

  private isRunning = true;

  constructor() {
    super('div', ['timer']);
    this.element.innerHTML = `
    <div class='timer'></div>
    `;
    setTimeout(() => {
      if(this.isRunning){
      this.startTimer();
      }
    }, 100000);
    setTimeout(() => {
      this.stopTime();
    }, 15000);
  }

  startTimer() {
    if (this.isRunning) {
      setTimeout(() => {
        const timer = document.querySelector('.timer');
         setInterval(() => {
          this.seconds += 1;
          if (this.seconds === 60) {
            this.minute += 1;
            this.seconds = 0;
          }
          if (this.minute === 60) {
            this.hours += 1;
            this.minute = 0;
          }
          const timerNew = `<div>${this.hours}:${this.minute}:${this.seconds}</div>`;
          if (timer) {
            timer.innerHTML = timerNew;
          }
        }, 1000);
      }, 4000);
    } else {
      clearInterval();
    }
  }

  getTime():number {
    const currentTime = this.seconds + this.minute * 60 + this.hours * 360;
    return currentTime;
  }

  stopTime():void {
    debugger;
    this.isRunning = false;
    const currentMin = this.minute;
    const currentHour = this.hours;
    const currentSec = this.seconds;
  }
}
// June 1 2021 ${this.hours} ${this.minute} ${this.seconds}
