import { Component } from "../common/Component.js";

export class CartItem extends Component {
  constructor(props) {
    super(props)
    this.handlerPlusQuantity = this.handlerPlusQuantity.bind(this)
    this.handlerMinusQuantity = this.handlerMinusQuantity.bind(this)
    this.handlerRemoveProduct = this.handlerRemoveProduct.bind(this)
  }

  handlerPlusQuantity() {
    this.props.cartContext.updateQuantity(this.props.item.id, 1)
  }

  handlerMinusQuantity() {
    this.props.cartContext.updateQuantity(this.props.item.id, -1)
  }

  handlerRemoveProduct() {
    this.props.cartContext.removeProduct(this.props.item.id)
  }

  render() {
    const cartItem = document.createElement('div')
    cartItem.className = 'cart_item'
    cartItem.innerHTML = ` 
      <img class="cart_image" src="${this.props.item.image}" alt="${this.props.item.title}" />
      <div class='cart_info'>
        <p class="cart_infoTitle">${this.props.item.title}</p>
        <p class="cart_infoPrice">$ ${this.props.item.price}</p>
      </div>
      <div class="cart_Btn">
        <div class="cart_counter">
          <button class='cart_minusBtn cart_countBtn'>-</button>
          <p class='cart_counterNum'>${this.props.item.count}</p>
          <button class='cart_plusBtn cart_countBtn'>+</button>
        </div>
        <button class="cart_removeBtn">Remove</button>
      </div>
    `

    cartItem.querySelector('.cart_minusBtn').addEventListener('click', this.handlerMinusQuantity)
    cartItem.querySelector('.cart_plusBtn').addEventListener('click', this.handlerPlusQuantity)
    cartItem.querySelector('.cart_removeBtn').addEventListener('click', this.handlerRemoveProduct)

    return cartItem
  }
}