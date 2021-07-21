// Query Selectors
const btn5Pct = document.getElementById('btn-5');
const btn10Pct = document.getElementById('btn-10');
const btn15Pct = document.getElementById('btn-15');
const btn25Pct = document.getElementById('btn-25');
const btn50Pct = document.getElementById('btn-50');
const btnCustom = document.getElementById('btn-custom');
const inputErrorMessage = document.getElementById('calculation-amount__err-msg')
let amountInput = document.getElementById('calculation-amount-input');
let peopleAmount = document.getElementById('calculation__people-input');


//variables
let percentageAmount = 0;
let totalAmount = 0

// ****** Pseudo Code for calculation
// amountInput is entered by the person
// Button is clicked. Depending on button pressed, the amount returned back should be different since different percentage numbers.

const buttonPressedValue = (e)=>{
    if(amountInput.value === ''){
        // the input box is empty. Validate what to do if it is empty.
        amountInput.classList.add('calculation-amount-input--error')
        inputErrorMessage.classList.add('calculation-amount__err-msg--active')
        console.log('Please fill this out')
    } else {
        const percentageString = e.textContent
        const percentageNumber = parseInt(percentageString.replace('%',''))
        percentageAmount = percentageNumber;
    } return percentageAmount; 
}

const calculatePct = (num, pct)=>{
    totalAmount = (parseFloat(num/100)*pct)/parseInt(peopleAmount.value);
   return totalAmount;
}

/* ########### Event Listeners ########### */

btn5Pct.addEventListener('click',()=>{
    if(amountInput.value === ''){
        // the input box is empty. Validate what to do if it is empty.
        amountInput.classList.add('calculation-amount-input--error')
        inputErrorMessage.classList.add('calculation-amount__err-msg--active')
        console.log('Please fill this out')
    } else {
        buttonPressedValue(btn5Pct)
        calculatePct(amountInput.value,percentageAmount)
        console.log(totalAmount.toFixed(2))
    }
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

amountInput.addEventListener('click',()=>{
    amountInput.classList.remove('calculation-amount-input--error');
    inputErrorMessage.classList.remove('calculation-amount__err-msg--active')
})
