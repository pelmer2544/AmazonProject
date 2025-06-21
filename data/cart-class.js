class Cart {

    cartItems;
    #localStorageKey; // private properties cannot be used outside the class

    // Adding localStorageKey and loading data from storage when the class is used to create an object
    constructor(localStorageKey) {

        this.#localStorageKey = localStorageKey;
        this.#loadFromStorage();
    }
    
    #loadFromStorage() {

        // "this" is what you use instead of "cart" (the object you're currently in)
        this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));

        if (!this.cartItems) {
            
            this.cartItems = [{
                productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                quantity: 2, 
                deliveryOptionId: '1'
            }, {
                productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                quantity: 1,
                deliveryOptionId: '2'
            }];
        }
    }

    // function that saves the cart contents to local storage
    saveToStorave() {
        localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
    }

    // Adding product to the cart when the "Add to Cart" button is clicked
    addToCart (productId) {

        let matchingItem; 

        this.cartItems.forEach((cartItem) => {
            if (cartItem.productId === productId) {
                matchingItem = cartItem;
            }
        });

        // Checking if we already have one or more of the same item in the cart
        if (matchingItem) {
            matchingItem.quantity += 1;
        }
        else {

            this.cartItems.push({
                productId: productId,
                quantity: 1, 
                deliveryOptionId: '1'
            });
        }

        this.saveToStorave();
    }

    // function that deletes an item from the checkout page
    removeFromCart (productId) {

        const newCart = [];

        this.cartItems.forEach((cartItem) => {

            if (cartItem.productId !== productId) {
                newCart.push(cartItem);
            }
        });

        this.cartItems = newCart;

        this.saveToStorave();
    }

    // function that updates the current delivery date on the checkout page
    updateDeliveryOption (productId, deliveryOptionId) {

        let matchingItem; 

        this.cartItems.forEach((cartItem) => {
            if (cartItem.productId === productId) {
                matchingItem = cartItem;
            }
        });

        matchingItem.deliveryOptionId = deliveryOptionId;

        this.saveToStorave();
    }
    
}

// Generating new objects using the Cart class
const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');

console.log(cart);
console.log(businessCart);
console.log(businessCart instanceof Cart);