import { Component } from "../common/Component.js";

export class Header extends Component {
  render() {
    const header = document.createElement('header')
    header.innerHTML = `
    <a class='header_logo' href='#'>🐢 Shop</a>
    <nav class='header_nav'>
      <li><a href="#" class='header_link'>🛒 Cart</a></li>
    </nav>
    `

    return header;
  }
}