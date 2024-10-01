import { Component } from "../common/Component.js";

export class Footer extends Component {
  render() {
    const footer = document.createElement('footer')
    footer.innerHTML = `
      <p>©2024 🐢 Shop</p>
    `

    return footer
  }
}