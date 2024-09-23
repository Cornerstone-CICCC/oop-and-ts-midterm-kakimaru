import { Component } from "../common/Component.js";

export class CartItem extends Component {
  constructor(props) {
    super(props)
    this.handlerPlusQuantity = this.handlerPlusQuantity.bind(this)
    this.handlerMinusQuantity = this.handlerMinusQuantity.bind(this)
  }

  handlerPlusQuantity() {
    this.props.cartContext.updateQuantity(this.props.item.id, 1)
  }

  handlerMinusQuantity() {
    this.props.cartContext.updateQuantity(this.props.item.id, -1)
  }

  render() {
    const cartItem = document.createElement('div')
    cartItem.className = 'cart-item'
    cartItem.innerHTML = ` 
      <img class="cart-image" src="${this.props.item.image}" alt="${this.props.item.title}" />
      <div class='cart-info'>
        <p class="cart-title">${this.props.item.title}</p>
        <p class="cart-price">${this.props.item.price}</p>
      </div>
      <div class="cart-counter">
        <button class='cart-minusBtn'>-</button>
        <p>${this.props.item.count}</p>
        <button class='cart-plusBtn'>+</button>
      </div>
    `

    cartItem.querySelector('.cart-minusBtn').addEventListener('click', this.handlerMinusQuantity)
    cartItem.querySelector('.cart-plusBtn').addEventListener('click', this.handlerPlusQuantity)

    return cartItem
  }
}