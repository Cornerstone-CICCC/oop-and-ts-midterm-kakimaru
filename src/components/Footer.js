import { Component } from "../common/Component.js";

export class Footer extends Component {
  render() {
    const footer = document.createElement('footer')
    footer.innerHTML = `
      <p>Copy right 2024</p>
    `

    return footer
  }
}