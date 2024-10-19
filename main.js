// Task 2 - Add Event Listeners for Product Selection

// prices for different sizes: 
const productPrices = {
    small: 18, 
    medium: 23,
    large: 28
};

// elements from the DOM
const sizeSelector = document.getElementById(`sizeSelector`); // sizes dropdown 
const productPrice = document.getElementById(`productPrice`); //prices

sizeSelector.addEventListener(`change`, function(){ // add event listener
    const selectedSize = sizeSelector.value; // gets the selected size
    productPrice.textContent = `$${productPrices[selectedSize].toFixed(2)}`; //changes accordingly the price on display
});


// Task 3 - Handle Stock Availability

// size availability 
const stockAvailability = {
    small: true,
    medium: true,
    large: false 
};

//purchase button
const purchaseButton = document.getElementById(`purchaseButton`);

sizeSelector.addEventListener(`change`, function(){ // disable/enable purchase button
    const selectedSize = sizeSelector.value;
    productPrice.textContent = `$${productPrices[selectedSize].toFixed(2)}`; //update price

    // check stock availability 
    if (!stockAvailability[selectedSize]){
        purchaseButton.disabled = true; // if the size is out of stock, it will unable the purchase button and display a message
        alert (`Sorry, this size is out of stock!`);
    } else {
        purchaseButton.disabled = false;
    }
});


// Task 4 - Create a Checkout Event

purchaseButton.addEventListener('click', function() {
    const selectedSize = sizeSelector.value; // Handle the "Buy Now" button click event

    if (stockAvailability[selectedSize]) {  // If the size is in stock, confirm the purchase
        alert('Thank you for purchasing with us! The size ' + selectedSize + ' has been successfully purchased.');
    } else {
        alert('We are out of stock for this size. You are unable to purchase it.');
    } // If it's out of stock, it shows an error message (more like a backup safety check apart from the previous alert)
});


// Task 5 - Implement Event Delegation for Dynamic Product List (???)

const productList = document.getElementById('productList'); // Assume a list of products

// Event delegation for dynamically added products
productList.addEventListener('change', function(event) {
    const target = event.target;
    
    if (target.classList.contains('sizeSelector')) {
        // Handle product selection logic hereconst selectedSize = target.value;
        const priceElement = target.closest('.product').querySelector('.productPrice');
        const purchaseButton = target.closest('.product').querySelector('.purchaseButton');
        
        // Atualiza o preço com base no tamanho selecionado
        priceElement.textContent = `$${productPrices[selectedSize].toFixed(2)}`;

        // Verifica disponibilidade em estoque
        if (!stockAvailability[selectedSize]) {
            purchaseButton.disabled = true;
            alert('Sorry, this size is out of stock!');
        } else {
            purchaseButton.disabled = false;
        }

    }
}); // ?????

