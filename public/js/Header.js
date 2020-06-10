import {Component} from './Component.js';

export class Header extends Component {
  render() {
      return `
        <div>
            <header class="header">
                <img class="header__logo" alt="Tensor logo" src="img/logo.jpg"/>
                <div class="header__title" title="Tensor school"> Tensor School </div>
            </header>
            <main class="content">
                <span class="content__description"> Это страница школы Тензор в городе Уфа. тут вы можете познакомиться с нашими учениками и посмотреть темы занятий</span>
                <div class="content__persons" id="persons"></div>
            </main>
        </div>`; 
  }
}