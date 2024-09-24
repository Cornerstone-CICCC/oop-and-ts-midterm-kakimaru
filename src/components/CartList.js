import { Component } from "../common/Component.js";
import { CartItem } from "./CartItem.js";

export class CartList extends Component {
  constructor(props) {
    super(props)
    this.state = { cart: [] }
    this.productListEl = null;
    this.totalPriceEl = null;
    this.totalCountEl = null;
    // this.cartEl = null

    this.updateCart = this.updateCart.bind(this)
    this.props.cartContext.subscribe(this.updateCart)

    this.handleCloseCart = this.handleCloseCart.bind(this)
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

    this.totalPriceEl.innerHTML = `
      <p class='cart_totalTitle'><span class='cart_totalText'>Total :</span> $ ${totalPrice.toFixed(2)}</p>
    `
    this.totalCountEl.innerHTML = `
      <p class='cart_totalTitle'><span class='cart_totalText'>Items :</span> ${totalCount}</p>
    `

    // this.cartEl = this.productListEl.closest('.cart_wrapper')
    const cartEl = document.querySelector('.cart_wrapper');
    if(this.state.cart.length > 0) 
      cartEl.classList.add('is-visible')
    else if (this.state.cart.length === 0)
      cartEl.classList.remove('is-visible')
  }

  handleCloseCart() {
    const cartEl = document.querySelector('.cart_wrapper');
    if(cartEl)
      cartEl.classList.toggle('is-visible')
  }


  render() {
    const cartEl = document.createElement('div')
    cartEl.className = 'cart'
    cartEl.innerHTML = `
      <div class='cart_titleWrap'>
        <h3 class="cart_title">Your Cart</h3>
        <span class='cart_closeBtn'>&#x2715;</span>
      </div>
      <ul class='cart_list'></ul>
      <div class='cart_totalInfo'>
        <p class='cart_totalPrice'></p>
        <p class='cart_totalCount'></p>
      </div>
    `

    this.productListEl = cartEl.querySelector('ul')
    this.totalPriceEl = cartEl.querySelector('.cart_totalPrice')
    this.totalCountEl = cartEl.querySelector('.cart_totalCount')

    cartEl.querySelector('.cart_closeBtn').addEventListener('click', this.handleCloseCart)

    return cartEl;
  }
}