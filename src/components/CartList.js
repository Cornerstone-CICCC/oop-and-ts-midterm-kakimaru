import { Component } from "../common/Component.js";
import { CartItem } from "./CartItem.js";

export class CartList extends Component {
  constructor(props) {
    super(props)
    this.state = { cart: [] }
    this.productListEl = null;
    this.totalPriceEl = null;
    this.totalCountEl = null;

    this.updateCart = this.updateCart.bind(this)
    this.props.cartContext.subscribe(this.updateCart)
  }

  updateCart(cart) {
    this.state.cart = cart
    this.productListEl.innerHTML = ''

    let totalPrice = 0
    let totalCount = 0

    this.state.cart.map(item => {
      const cartItem = new CartItem({
        item,
        cartContext: this.props.cartContext,
      });
      this.productListEl.appendChild(cartItem.render());
      totalPrice += item.price * item.count
      totalCount += item.count
    })

    this.totalPriceEl.textContent = `Total: $ ${totalPrice.toFixed(2)}`
    this.totalCountEl.textContent = `Total items: ${totalCount}`
    
  }


  render() {
    const cartEl = document.createElement('div')
    cartEl.innerHTML = `
      <h3>Your Cart</h3>
      <ul class='cart-list'></ul>
      <p class='cart-totalPrice'></p>
      <p class='cart-totalCount'></p>
    `

    this.productListEl = cartEl.querySelector('ul')
    this.totalPriceEl = cartEl.querySelector('.cart-totalPrice')
    this.totalCountEl = cartEl.querySelector('.cart-totalCount')

    return cartEl;
  }
}