//when hit the
// CONVERT buttom get value of input and multiple
// that with units and use function with PARAMETERS
// to print te texts in P ELEMENTS
const meterOutput = document.querySelector('#meter')
const literOutput = document.querySelector('#liter')
const poundOutput = document.querySelector('#pound')
const convertBtn = document.querySelector('#convert-btn')
const clearBtn = document.querySelector('#clear-btn')
let unitInput = document.querySelector('#unit').value


convertBtn.addEventListener('click', function () {
    let unitInput = document.querySelector('#unit').value
    const feetUnit = 3.281
    const gallonUnit = 0.264
    const poundUNit = 2.204
    meterOutput.innerHTML = `${unitInput} meters = ${(unitInput * feetUnit).toFixed(3)} feet | ${unitInput} feet = ${(unitInput / feetUnit).toFixed(3)} meters`
    literOutput.innerHTML = `${unitInput} liters = ${(unitInput * gallonUnit).toFixed(3)} gallons | ${unitInput} gallons = ${(unitInput / gallonUnit).toFixed(3)} liters`
    poundOutput.innerHTML = `${unitInput} kilos = ${(unitInput * poundUNit).toFixed(3)} pounds | ${unitInput} pounds = ${(unitInput / poundUNit).toFixed(3)} kilos`




})
clearBtn.addEventListener('click', function(){
    unitInput = ''


})

