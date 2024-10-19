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

