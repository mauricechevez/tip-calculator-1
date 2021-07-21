// Query Selectors
const btn5Pct = document.getElementById('btn-5');
const btn10Pct = document.getElementById('btn-10');
const btn15Pct = document.getElementById('btn-15');
const btn25Pct = document.getElementById('btn-25');
const btn50Pct = document.getElementById('btn-50');
const btnCustom = document.getElementById('btn-custom');

const buttonPressedValue = (e)=>{
    const percentageString = e.textContent
    const newNumber = parseInt(percentageString.replace('%',''))
    return console.log(newNumber);
}

/* ########### Event Listeners ########### */

btn5Pct.addEventListener('click',()=>{
    buttonPressedValue(btn5Pct)
})

btn10Pct.addEventListener('click',()=>{
    buttonPressedValue(btn10Pct)
})
btn15Pct.addEventListener('click',()=>{
    buttonPressedValue(btn15Pct)
})
btn25Pct.addEventListener('click',()=>{
    buttonPressedValue(btn25Pct)
})
btn50Pct.addEventListener('click',()=>{
    buttonPressedValue(btn50Pct)
})

