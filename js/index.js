// Query Selectors
const btn5Pct = document.getElementById('btn-5');
const btn10Pct = document.getElementById('btn-10');
const btn15Pct = document.getElementById('btn-15');
const btn25Pct = document.getElementById('btn-25');
const btn50Pct = document.getElementById('btn-50');
const btnCustom = document.getElementById('btn-custom');
const inputErrorMessage = document.getElementById('calculation-amount__err-msg')
const peopleInputErrorMessage = document.getElementById('calculation__people-input-err-msg')
const resetButton = document.getElementById('reset-button');
let amountInput = document.getElementById('calculation-amount-input');
let peopleAmount = document.getElementById('calculation__people-input');
let tipAmount = document.getElementById('tip-amount');
let totalAmountDisplay = document.getElementById('total-amount');



/* ######## variables ######## */
let percentageAmount = 0;
let totalTipAmount = 0;
let totalBillAmount = 0;

/* ######## FUNCTIONS ######## */
const buttonPressedValue = (e)=>{
        const percentageString = e.textContent
        const percentageNumber = parseInt(percentageString.replace('%',''))
        percentageAmount = percentageNumber;
        return percentageAmount; 
    } 

const calculatePct = (num, pct)=>{
    if(peopleAmount.value === '0'){
        console.log('This cannot be 0')
    } else {
    totalTipAmount = (parseFloat(num/100)*pct)/parseInt(peopleAmount.value);
    totalBillAmount = (totalTipAmount + parseFloat(amountInput.value)) / peopleAmount.value
    }
   return totalTipAmount;
}

function addActive(btn){
    btn.classList.add('calculation__btn--active')
}

//https://clubmate.fi/remove-a-class-name-from-multiple-elements-with-pure-javascript
function removeActives(){
    const els = document.getElementsByClassName('calculation__btn--active')
    while (els[0]){
    els[0].classList.remove('calculation__btn--active')
    }
}

function resetAll(){
    // Change the (Bill) Amount input
    // Change the Number of People input
    // change the button Active color/class
    // Change the Tip Amount Display text and value
    // Change the Total Amount Display text and value
    percentageAmount = 0;
    totalTipAmount = 0;
    totalBillAmount = 0;
    amountInput.value = '';
    peopleAmount.value = '1';
    tipAmount.textContent = '0.00'
    totalAmountDisplay.textContent = '0.00'
    removeActives();
}


/* ########### Event Listeners ########### */

btn5Pct.addEventListener('click',()=>{
    if(amountInput.value === ''){
        // the input box is empty. Validate what to do if it is empty.
        amountInput.classList.add('calculation-amount-input--error')
        inputErrorMessage.classList.add('calculation-amount__err-msg--active')
    } else if (peopleAmount.value === '0'){
        peopleInputErrorMessage.classList.add('calculation__people-input-err-msg--active')
        peopleAmount.classList.add('calculation__people-input--error')
    } else {
        buttonPressedValue(btn5Pct)
        calculatePct(amountInput.value,percentageAmount)
        removeActives()
        addActive(btn5Pct)
        tipAmount.textContent = totalTipAmount.toFixed(2);
        totalAmountDisplay.textContent = totalBillAmount.toFixed(2)
    }
})

btn10Pct.addEventListener('click',()=>{
    if(amountInput.value === ''){
        amountInput.classList.add('calculation-amount-input--error')
        inputErrorMessage.classList.add('calculation-amount__err-msg--active')
    } else if (peopleAmount.value === '0'){
        peopleInputErrorMessage.classList.add('calculation__people-input-err-msg--active')
        peopleAmount.classList.add('calculation__people-input--error')
    } else {
    buttonPressedValue(btn10Pct)
    calculatePct(amountInput.value,percentageAmount)
    removeActives()
    addActive(btn10Pct)
    tipAmount.textContent = totalTipAmount.toFixed(2);
    totalAmountDisplay.textContent = totalBillAmount.toFixed(2)
    }
})
btn15Pct.addEventListener('click',()=>{
    if(amountInput.value === ''){
        amountInput.classList.add('calculation-amount-input--error')
        inputErrorMessage.classList.add('calculation-amount__err-msg--active')
    } else if (peopleAmount.value === '0'){
        peopleInputErrorMessage.classList.add('calculation__people-input-err-msg--active')
        peopleAmount.classList.add('calculation__people-input--error')
    } else {
    buttonPressedValue(btn15Pct)
    calculatePct(amountInput.value,percentageAmount)
    removeActives()
    addActive(btn15Pct)
    tipAmount.textContent = totalTipAmount.toFixed(2);
    totalAmountDisplay.textContent = totalBillAmount.toFixed(2)
    }
})
btn25Pct.addEventListener('click',()=>{
    if(amountInput.value === ''){
        amountInput.classList.add('calculation-amount-input--error')
        inputErrorMessage.classList.add('calculation-amount__err-msg--active')
    } else if (peopleAmount.value === '0'){
        peopleInputErrorMessage.classList.add('calculation__people-input-err-msg--active')
        peopleAmount.classList.add('calculation__people-input--error')
    } else {
    buttonPressedValue(btn25Pct)
    calculatePct(amountInput.value,percentageAmount)
    removeActives()
    addActive(btn25Pct)
    tipAmount.textContent = totalTipAmount.toFixed(2);
    totalAmountDisplay.textContent = totalBillAmount.toFixed(2)
    }
})
btn50Pct.addEventListener('click',()=>{
    if(amountInput.value === ''){
        amountInput.classList.add('calculation-amount-input--error')
        inputErrorMessage.classList.add('calculation-amount__err-msg--active')
    } else if (peopleAmount.value === '0'){
        peopleInputErrorMessage.classList.add('calculation__people-input-err-msg--active')
        peopleAmount.classList.add('calculation__people-input--error')
    } else {
    buttonPressedValue(btn50Pct)
    calculatePct(amountInput.value,percentageAmount)
    removeActives()
    addActive(btn50Pct)
    tipAmount.textContent = totalTipAmount.toFixed(2);
    totalAmountDisplay.textContent = totalBillAmount.toFixed(2)
    }
})

btnCustom.addEventListener('click',()=>{
    console.log(amountInput.value)
    
})

amountInput.addEventListener('click',()=>{
    amountInput.classList.remove('calculation-amount-input--error');
    inputErrorMessage.classList.remove('calculation-amount__err-msg--active')
})

peopleAmount.addEventListener('click',()=>{
    peopleInputErrorMessage.classList.remove('calculation__people-input-err-msg--active')
    peopleAmount.classList.remove('calculation__people-input--error')
})

resetButton.addEventListener('click', ()=>{
    resetAll();
})

// TEST BUTTON !!!!!
// const testButton = document.getElementsByClassName('reset-button-draft')[0];
// testButton.addEventListener('click', ()=>{
//     resetAll()
// })
