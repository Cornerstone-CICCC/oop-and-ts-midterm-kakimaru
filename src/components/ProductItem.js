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
    product.className = 'product_item'
    product.innerHTML = `
      <div class='product_image-wrapper'>
        <img src="${this.props.productData.image}" alt="${this.props.productData.title}" class='product_image' />
      </div>
      <h3 class='product_title'>${this.props.productData.title}</h3>
      <p class='product_desc'>${this.props.productData.description}</p>
      <p class='product_price'>$ ${this.props.productData.price}</p>
      <button class='product_addBtn'>Add to Cart</button>
    `

    product.querySelector('.product_addBtn').addEventListener('click', this.handleAddToCart)

    return product
  }
}