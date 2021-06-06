import './styles.scss';
import { App } from './app';

window.onload = () => {
  alert('Извиняюсь за качество верстки, не хватило времени. С точки зрения функционала старался выполнить все. ');
  const appElement = document.getElementById('app');
  if (!appElement) throw Error('App root element not found');

  const app = new App(appElement).start();
};
