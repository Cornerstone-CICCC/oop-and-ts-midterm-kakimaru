import { Component } from "../common/Component.js";

export class Header extends Component {
  constructor() {
    super()
    this.handleToggleCart = this.handleToggleCart.bind(this)
  }

  handleToggleCart() {
    const cartEl = document.querySelector('.cart_wrapper');
    if(cartEl)
      cartEl.classList.toggle('is-visible')
  }

  render() {
    const header = document.createElement('header')
    header.innerHTML = `
    <a class='header_logo' href='#'>🐢 Shop</a>
    <nav class='header_nav'>
      <li class='cart_toggle'><a class='header_link'>🛒 Cart</a></li>
    </nav>
    `
    header.querySelector('.cart_toggle').addEventListener('click', this.handleToggleCart)

    return header;
  }
}