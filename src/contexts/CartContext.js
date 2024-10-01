export class CartContext {
  constructor() {
    this.cart = [];
    this.listener = [];
  }

  addProduct(product) {
    const existingProductId = this.cart.findIndex(
      (item) => item.id === product.id
    );
    if (existingProductId !== -1) {
      this.cart[existingProductId].count += 1;
    } else {
      const newProduct = {
        count: 1,
        ...product,
      };
      this.cart.push(newProduct);
    }
    this.notifyListeners();
  }

  updateQuantity(id, num) {
    const curProduct = this.cart.find((item) => item.id === id);
    if (curProduct) {
      curProduct.count += num;
      if (curProduct.count <= 0) {
        const confirmDelete = confirm(`Are you okey to remove this item?`)
        if(confirmDelete) {
          this.cart = this.cart.filter(item => item.id !== id)
        } else {
          curProduct.count = 1
        }
      }
    }

    this.notifyListeners();
  }

  removeProduct(id) {
    this.cart = this.cart.filter(item => item.id !== id)
    this.notifyListeners();
  }

  getCart() {
    return this.cart;
  }

  subscribe(listener) {
    this.listener.push(listener);
  }

  notifyListeners() {
    this.listener.forEach((listener) => listener(this.cart));
  }
}
