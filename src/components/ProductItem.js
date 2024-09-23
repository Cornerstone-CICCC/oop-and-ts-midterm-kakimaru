import { Component } from "../common/Component.js";

export class ProductItem extends Component {
  constructor(props) {
    super(props)
    this.handleAddToCart = this.handleAddToCart.bind(this)
  }

  handleAddToCart() {
    this.props.cartContext.addProduct(this.props.productData)
  }

  render() {
    const product = document.createElement('div')
    product.innerHTML = `
      <img src="${this.props.productData.image}" alt="${this.props.productData.title}" class='product-image' />
      <h3 class='product-title'>${this.props.productData.title}</h3>
      <p class='product-desc'>${this.props.productData.description}</p>
      <p>$ ${this.props.productData.price}</p>
      <button class='product-addBtn'>Add to Cart</button>
    `

    product.querySelector('.product-addBtn').addEventListener('click', this.handleAddToCart)

    return product
  }
}