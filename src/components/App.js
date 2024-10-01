import { Component } from "../common/Component.js";
import { CartList } from "./CartList.js";
import { Footer } from "./Footer.js";
import { Header } from "./Header.js";
import { ProductList } from "./ProductList.js";

export class App extends Component {
  render() {
    const appContainer = document.createElement('div')
    appContainer.className = 'container'
    appContainer.innerHTML = `
    <div class='header_wrapper'></div>
    <div class='content_wrapper'>
      <main>
        <h1 class='main_title'>Today's items</h1>
        <div class='cart_wrapper'></div>
      </main>
    </div>
    <div class='footer_wrapper'></div>
    `

    const header = new Header().render()
    const footer = new Footer().render()

    appContainer.querySelector('.header_wrapper').appendChild(header)
    appContainer.querySelector('.footer_wrapper').appendChild(footer)
    

    const productList = new ProductList({ cartContext: this.props.cartContext })
    productList.mount(appContainer.querySelector('main'))

    const cart = new CartList({ cartContext: this.props.cartContext }).render()

    appContainer.querySelector('.cart_wrapper').appendChild(cart)

    

    return appContainer
  }
}