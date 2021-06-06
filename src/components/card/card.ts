import './card.scss';
import { BaseComponent } from '../base-component';
import { UserService } from '../../services/user-service/user-service';

const FLIP_CLASS = 'flipped';
const userService = new UserService();

export class Card extends BaseComponent {
  constructor(readonly image: string) {
    super('div', ['card-container']);
    const cards = document.createElement('div');
    cards.classList.add('card');

    const cardFront = document.createElement('div');
    cardFront.classList.add('card__front');
    cardFront.style.backgroundImage = `url('./images/${image}')`;
    const cardBack = document.createElement('div');
    cardBack.classList.add('card__back');
    this.element.append(cards);
    this.getCards();
    cards.appendChild(cardFront);
    cards.appendChild(cardBack);
  }

  flipToBack() {
    return this.flip(true);
  }

  flipToFront() {
    return this.flip(false);
  }

  private flip(isFront = false): Promise<void> {
    return new Promise((res) => {
      this.element.classList.toggle(FLIP_CLASS, isFront);
      this.element.addEventListener('transitionend', () => res(), {
        once: true,
      });
    });
  }

  async getCards() {
    const difficulty = await userService.getUserDiff();
    const card = document.querySelectorAll('.card');
    if (difficulty === 1) {
      card?.forEach((element) => element.classList.add('card-medium'));
      console.log(difficulty);
      console.log(card);
    } else if (difficulty === 2) {
      card?.forEach((element) => element.classList.add('card-hard'));
      console.log(difficulty);
      console.log(card);
    }
  }
}
