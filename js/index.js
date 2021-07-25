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
const customModal = document.getElementsByClassName('custom-modal')[0];
const btnCustomModalCancel = document.getElementById('custom-modal__close-btn');
const btnCustomModalCalculate = document.getElementById('custom-calculate-btn')
const customModalErrorMsg = document.getElementsByClassName('custom-modal__error-msg')[0]
const doubleArrow = document.getElementsByClassName('instructions__title-img')[0];
const instructionContent = document.getElementsByClassName('instructions__content')[0];
let customModalInputPct = document.getElementById('custom-modal__inputfield')
let amountInput = document.getElementById('calculation-amount-input');
let peopleAmount = document.getElementById('calculation__people-input');
let tipAmount = document.getElementById('tip-amount');
let totalAmountDisplay = document.getElementById('total-amount');

/* Calculate proportions of element - for MOBILE */
const calcBox = document.querySelector('.calculator')
let calcBoxWidth = calcBox.clientWidth;
let calcBoxheight = calcBox.clientHeight;
let instructionsActive = false;

// console.log(`${width} wide and ${height}`)




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

const customValueCalculation = (e)=>{
    const percentageString = e.value
    const percentageNumber = parseInt(percentageString)
    percentageAmount = percentageNumber;
    return percentageAmount; 
}

const calculatePct = (num, pct)=>{
    totalTipAmount = (parseFloat(num/100)*pct)/parseInt(peopleAmount.value);
    totalBillAmount = (totalTipAmount + parseFloat(amountInput.value)) / peopleAmount.value
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

/* ########### RESET ALL ########### */
function resetAll(){
    percentageAmount = 0;
    totalTipAmount = 0;
    totalBillAmount = 0;
    amountInput.value = '';
    peopleAmount.value = '1';
    tipAmount.textContent = '0.00'
    totalAmountDisplay.textContent = '0.00'
    customModalInputPct.value = '';
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

/* #### CUSTOM Modal Events #### */

btnCustom.addEventListener('click',()=>{
    if(amountInput.value === ''){
        amountInput.classList.add('calculation-amount-input--error')
        inputErrorMessage.classList.add('calculation-amount__err-msg--active')
    } else if (peopleAmount.value === '0'){
        peopleInputErrorMessage.classList.add('calculation__people-input-err-msg--active')
        peopleAmount.classList.add('calculation__people-input--error')
    } else {
    customModal.classList.add('custom-modal--visible');  
    }
})
btnCustomModalCalculate.addEventListener('click', ()=>{
    if(customModalInputPct.value ===''){
        console.log('Please enter a valid number')
        customModalInputPct.classList.add('custom-modal__inputfield--err')
        customModalErrorMsg.classList.add('custom-modal__error-msg--active')
    } else {
    customValueCalculation(customModalInputPct)
    calculatePct(amountInput.value,percentageAmount)
    tipAmount.textContent = totalTipAmount.toFixed(2);
    totalAmountDisplay.textContent = totalBillAmount.toFixed(2);
    removeActives()
    addActive(btnCustom)
    customModal.classList.remove('custom-modal--visible');
    }    

})

customModalInputPct.addEventListener('click', ()=>{
    customModalInputPct.classList.remove('custom-modal__inputfield--err');
    customModalErrorMsg.classList.remove('custom-modal__error-msg--active');
})

btnCustomModalCancel.addEventListener('click',()=>{
    customModal.classList.remove('custom-modal--visible');
    customModalInputPct.value = '';
})

/* #### END of CUSTOM Modal Events #### */

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

doubleArrow.addEventListener('click',()=>{
    if(!instructionsActive){
        doubleArrow.classList.add('instructions__title-img--active');
        instructionContent.classList.add('instructions__content--active')
        instructionsActive = true;
    } else {
        doubleArrow.classList.remove('instructions__title-img--active') 
        instructionContent.classList.remove('instructions__content--active')
        instructionsActive = false;
    }
})

// TEST BUTTON !!!!!
// const testButton = document.getElementsByClassName('reset-button-draft')[0];
// testButton.addEventListener('click', ()=>{
//     resetAll()
// })
