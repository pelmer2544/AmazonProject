export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
    
    cart = [{
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2, 
        deliveryOptionId: '1'
    }, {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryOptionId: '2'
    }];
}



// Adding product to the cart when the "Add to Cart" button is clicked
export function addToCart (productId) {

    let matchingItem; 

    cart.forEach((cartItem) => {
        if (cartItem.productId === productId) {
            matchingItem = cartItem;
        }
    });

    // Checking if we already have one or more of the same item in the cart
    if (matchingItem) {
        matchingItem.quantity += 1;
    }
    else {

        cart.push({
            productId: productId,
            quantity: 1, 
            deliveryOptionId: '1'
        });
    }

    saveToStorave();
}

// function that deletes an item from the checkout page
export function removeFromCart (productId) {

    const newCart = [];

    cart.forEach((cartItem) => {

        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });

    cart = newCart;

    saveToStorave();
}

// function that saves the cart contents to local storage
function saveToStorave() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// function that updates the current delivery date on the checkout page
export function updateDeliveryOption (productId, deliveryOptionId) {

    let matchingItem; 

    cart.forEach((cartItem) => {
        if (cartItem.productId === productId) {
            matchingItem = cartItem;
        }
    });

    matchingItem.deliveryOptionId = deliveryOptionId;

    saveToStorave();
}