export const cart = [];

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
            quantity: 1
        });
    }
}