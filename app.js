function Product(name, price) {
    let productName = name
    let productPrice = price

    this.getName = () => {
        return productName;
    }

    this.getPrice = () => {
        return productPrice;
    }
}

let productArray = []


function ShoppingCart() {


    this.addItem = (product) => {
        productArray.push(product)
    }

    this.getCartItems = () => {
        let cartItems = []

        for (let i = 0; i < productArray.length; i++) {
            cartItems.push({
                name: productArray[i].getName(),
                Price: productArray[i].getPrice()
            })
        }
        return cartItems
    }
}




const arr = []

const addToCart = (button) => {
    // const card = document.getElementById(cardId)

   
    const buttonParent = button.parentNode
    const ParentCard = buttonParent.parentNode

    const cardName = ParentCard.querySelector('h4').textContent
    const price = ParentCard.querySelector('.price').textContent
    
    const product1 = new Product(cardName, price)

    const cart = new ShoppingCart()

    cart.addItem(product1)

    sessionStorage.setItem("products", JSON.stringify(cart.getCartItems()))

}