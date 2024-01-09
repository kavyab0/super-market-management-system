// Sample inventory data
const inventory = [
    { id: 1, name: 'Apples', price: 1.99, quantity: 50 },
    { id: 2, name: 'Bananas', price: 0.99, quantity: 75 },
    { id: 3, name: 'Milk', price: 2.49, quantity: 30 },
    // Add more sample data here
];

// Get DOM elements
const inventoryTable = document.getElementById('inventory-table');
const cartItemsList = document.getElementById('cart-items');
const checkoutButton = document.getElementById('checkout-button');

// Display inventory data
function displayInventory() {
    let inventoryHTML = '';
    for (const item of inventory) {
        inventoryHTML += `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>${item.quantity}</td>
            </tr>
        `;
    }
    inventoryTable.innerHTML = inventoryHTML;
}

// Handle adding items to the cart
function addToCart(item) {
    const cartItem = document.createElement('li');
    cartItem.innerText = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsList.appendChild(cartItem);
}

// Initialize the system
function init() {
    displayInventory();

    inventoryTable.addEventListener('click', (event) => {
        if (event.target.tagName === 'TD') {
            const productId = parseInt(event.target.parentElement.firstChild.textContent);
            const selectedProduct = inventory.find(item => item.id === productId);
            addToCart(selectedProduct);
        }
    });

    checkoutButton.addEventListener('click', () => {
        alert('Checkout process not implemented in this example.');
        cartItemsList.innerHTML = ''; // Clear the cart
    });
}

init();
