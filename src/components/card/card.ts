import './card.scss';
import { BaseComponent } from '../base-component';
import { Game } from '../game/game';
import { rightChoise } from '../game/game';
const FLIP_CLASS = 'flipped';

export class Card extends BaseComponent {
  constructor(readonly image: string) {
    super('div', ['card-container']);
    const cards = document.createElement('div');
    cards.classList.add('card');
    const cardFront = document.createElement('div');
    cardFront.classList.add('card__front');
    cardFront.style.backgroundImage = `url('./images/${image}')`
    const cardBack = document.createElement('div');
    cardBack.classList.add('card__back');
    this.element.append(cards);
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
}
