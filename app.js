/* Frist Class Tricket */

// Increase FirstClass Count
function increaseFirstClassCount(){
    const fristClassTricketCount = document.getElementById('fristClass-count');
    const fristClassCount = fristClassTricketCount.value;
    const newfristClassCount = parseInt(fristClassCount) + 1;
    fristClassTricketCount.value = newfristClassCount;
    updateFirstClassPrice();
 }

// decrease First Class Count
function decreaseFirstClassCount(){
    const fristClassTricketCount = document.getElementById('fristClass-count');
    const fristClassCount = fristClassTricketCount.value;
    const newfristClassCount = parseInt(fristClassCount) - 1;
    fristClassTricketCount.value = newfristClassCount;
    updateFirstClassPrice();
 }

 function updateFirstClassPrice(){
   const fristClassTricketCount = document.getElementById('fristClass-count');
   const fristClassCount = fristClassTricketCount.value;
   const firstClassPrice = parseInt(fristClassCount) * 150;
   const fristClassTricketPrice = document.getElementById('firstClass-price');
   fristClassTricketPrice.innerText = '$' + firstClassPrice;
   updateTotalPrice();
 }


/*Economy Class Tricket */

// Increase Economy Class Count
function increaseEconomyClassCount(){
    const economyClassTricketCount = document.getElementById('economyClass-count');
    const economyClassCount = economyClassTricketCount.value;
    const neweconomyClassCount = parseInt(economyClassCount) + 1;
    economyClassTricketCount.value = neweconomyClassCount;
    updateEconomyClassPrice();
 }

// decrease Economy Class Count
function decreaseEconomyClassCount(){
    const economyClassTricketCount = document.getElementById('economyClass-count');
    const economyClassCount = economyClassTricketCount.value;
    const neweconomyClassCount = parseInt(economyClassCount) - 1;
    economyClassTricketCount.value = neweconomyClassCount;
    updateEconomyClassPrice();
 }

 //Update Economy Class Tricket Price
 function updateEconomyClassPrice(){
   const economyClassTricketCount = document.getElementById('economyClass-count');
   const economyClassCount = economyClassTricketCount.value;
   const economyClassPrice = parseInt(economyClassCount) * 100;
   const economyClassTricketPrice = document.getElementById('economyClass-price');
   economyClassTricketPrice.innerText = '$' + economyClassPrice;
   updateTotalPrice();
 }


// Total Tricket Price:
function updateTotalPrice(){
   const fristClassCount = document.getElementById('fristClass-count').value;
   const economyClassCount = document.getElementById('economyClass-count').value;
   const totalPrice = parseInt(fristClassCount) * 150 + parseInt(economyClassCount) * 100;
   
   const taxAmount = (totalPrice / 100 * 10); 
   console.log(totalPrice, taxAmount);
   const grandTotal = totalPrice + parseFloat(taxAmount);
   
   const totalPriceElement = document.getElementById('subtotal-price');
   totalPriceElement.innerText = '$' +  totalPrice;
   const taxElement = document.getElementById('tax-amount');
   taxElement.innerText = '$' +  taxAmount;
   const grandTotalElement = document.getElementById('grand-total');
   grandTotalElement.innerText = '$' +  grandTotal;
}

// Book Now Button
function bookingTricket() {
   alert("Make Sure Your Tricket And Pay Online With bKash or Nagad");
 }
// End