import { BaseComponent } from '../base-component';
import { CardsField } from '../cards-field/cards-field';
import { Card } from '../card/card';
import { delay } from '../../shared';
import { ImageCategoryModel } from '../../models/image-category-models';
import { Timer } from '../timer/timer';
import { Alert } from '../congratulation/congr';
import { userService } from '../../services/user-service/user-service';
import { check, Settings } from '../settings/setting';
import { Best } from '../best/best';
import { router } from '../../router';
import { Header } from '../header/header';

const header = new Header();
const settings = new Settings();
const UserService = new userService();
const FLIP_DELAY = 3000;
export let rightChoise = true;

export class Game extends BaseComponent {
  private readonly cardsField = new CardsField();
  private readonly timer = new Timer();
  private correctChoise: number = 0;
  private nonCorrectChoise: number = 0;
  private scoreNumber: number = 0;
  private count: number = 0;
  private activeCard?: Card;
  public checkGame = 'true';
  private isAnimation = false;

  constructor() {
    super('div', ['game']);
    if(this.checkGame === 'true'){
    this.cardsField = new CardsField();
    this.element.appendChild(this.cardsField.element);
    this.element.appendChild(this.timer.element);
    Game.loadImages().then((images) => this.startGame(images));
    }
  }

  private static async loadImages(): Promise<string[]> {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();
    // const difficulty = UserService.getUserDiff() as Array<number>;
    const cat = categories[0];
    console.log(cat)
    return cat.images.map((name) => `${cat.category}/${name}`);
  }

  startGame(images: string[]) {
    this.cardsField.clear();
    const cards = images
      .concat(images)
      .map((url) => new Card(url))
      .sort(() => Math.random() - 0.5);

    cards.forEach((card) => {
      card.element.addEventListener('click', () => this.cardHandler(card));
    });

    this.cardsField.addCards(cards);
    this.timer.startTimer();
    this.timer.getTime();
  }

  private async cardHandler(card: Card) {
    if (this.isAnimation) return;
    this.isAnimation = true;

    await card.flipToFront();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }

    if (this.activeCard.image !== card.image) {
      rightChoise = true;
      this.changeColor(card);
      await delay(FLIP_DELAY);
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
      this.nonCorrectChoise += 1;
      this.count += 1;
      this.getScore()
      console.log(this.getScore())
    } else {
      this.changeColor(card);
      this.correctChoise += 1;
      this.count += 1;
      this.getScore();
      if (this.correctChoise === 4) {
        this.gameEnd();
      }
    }

    this.activeCard = undefined;
    this.isAnimation = false;
  }
  getScore() {
    this.scoreNumber = (this.count - this.nonCorrectChoise) * 100 - this.timer.getTime() * 10;
    if (this.scoreNumber < 0) {
      return 0
    }
    return this.scoreNumber;
  }
  public changeColor(cardNext: any) {
    if (rightChoise) {
      this.activeCard?.element.classList.add('right')
      cardNext.element.classList.add('right')
    } else {
      console.log(this.activeCard?.element.classList)
      console.log(cardNext.element.classList)
    }
  }
  gameEnd() {
    debugger;
    const alert = new Alert;
    alert.alertScore(this.getScore())
    UserService.updateUserScore(this.getScore());
  }
}
