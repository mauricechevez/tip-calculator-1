// Query Selectors
const btn5Pct = document.getElementById('btn-5');
const btn10Pct = document.getElementById('btn-10');
const btn15Pct = document.getElementById('btn-15');
const btn25Pct = document.getElementById('btn-25');
const btn50Pct = document.getElementById('btn-50');
const btnCustom = document.getElementById('btn-custom');
let amountInput = document.getElementById('calculation-amount-input');

//variables
let percentageAmount = 0;
let totalAmount = 0

// ****** Pseudo Code for calculation
// amountInput is entered by the person
// Button is clicked. Depending on button pressed, the amount returned back should be different since different percentage numbers.


const buttonPressedValue = (e)=>{
    const percentageString = e.textContent
    const percentageNumber = parseInt(percentageString.replace('%',''))
    percentageAmount = percentageNumber;
    return percentageNumber;
}

const calculatePct = (num, pct)=>{
    totalAmount = parseFloat(num/100)*pct;
   return totalAmount;
}

/* ########### Event Listeners ########### */

btn5Pct.addEventListener('click',()=>{
    buttonPressedValue(btn5Pct)
    calculatePct(amountInput.value,percentageAmount)
    console.log(totalAmount.toFixed(2))
})

btn10Pct.addEventListener('click',()=>{
    buttonPressedValue(btn10Pct)
    calculatePct(amountInput.value,percentageAmount)
    console.log(totalAmount.toFixed(2))
})
btn15Pct.addEventListener('click',()=>{
    buttonPressedValue(btn15Pct)
    calculatePct(amountInput.value,percentageAmount)
    console.log(totalAmount.toFixed(2))
})
btn25Pct.addEventListener('click',()=>{
    buttonPressedValue(btn25Pct)
    calculatePct(amountInput.value,percentageAmount)
    console.log(totalAmount.toFixed(2))
})
btn50Pct.addEventListener('click',()=>{
    buttonPressedValue(btn50Pct)
    calculatePct(amountInput.value,percentageAmount)
    console.log(totalAmount.toFixed(2))
})

btnCustom.addEventListener('click',()=>{
    console.log(amountInput.value)
    
})

