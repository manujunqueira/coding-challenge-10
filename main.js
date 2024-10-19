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
