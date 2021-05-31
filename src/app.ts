import { About } from './components/about/about';
import { Best } from './components/best/best';
import { Game } from './components/game/game';
import { Header } from './components/header/header';
import { Form } from './components/registration-form/form';
import { Settings } from './components/settings/setting';
import { Timer } from './components/timer/timer';
import { ImageCategoryModel } from './models/image-category-models';
import { router } from './router';

const header = new Header();

const routerConfig: Map<string, () => HTMLElement> = new Map([
  ['/', () => new About().element],
  [
    '/game',
    () => new Game().element,
  ],
  [
    '/score',
    () => new Best().element,
  ],
  [
    '/settings',
    () => new Settings().element
    // () => {
    //   const settingsPage = document.createElement('h1');
    //   settingsPage.innerText = 'Settings Page';
    //   return settingsPage;
    // },
  ],
]);

export class App {
  private readonly pageOutlet: HTMLDivElement;

  constructor(private readonly rootElement: HTMLElement) {
    const header = new Header();
    this.pageOutlet = document.createElement('div');
    if (this.rootElement) {
      this.rootElement.appendChild(header.element)
    }
    this.rootElement.appendChild(this.pageOutlet);
  }

  start(): void {
    router.subscribe((path) => {
      debugger;
      console.log(header.check)
      const componentFactory = routerConfig.get(path);
      if (componentFactory) {
        const component = componentFactory();
        this.pageOutlet.innerHTML = '';
        this.pageOutlet.append(component);
      }
    });
  }
}
