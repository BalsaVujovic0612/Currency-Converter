let convertBtn = document.getElementById('convertBtn')
let switchBtn = document.getElementById('switchBtn')
convertBtn.addEventListener('click',convertCurrency)
async function convertCurrency(){
    let inputValue = document.getElementById('inputValue').value
    let fromCurrency = document.getElementById('from-currency').value
    let toCurrency = document.getElementById('to-currency').value

    

    if(inputValue === ''){
        alert('Insert the number')
        console.log('Enter the number')
        return;
    }
    const apiUrl = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
    try{
    const response = await fetch(apiUrl)
    const data = await response.json()
    const rate = data.rates[toCurrency]
    const covertedResult = (inputValue * rate).toFixed(2)

    let result = document.getElementById('result')
    result.innerText = `${inputValue} ${fromCurrency} = ${toCurrency} ${covertedResult}`

    
    }catch(error){
        console.error('Error fetching the currency data:',error)
    }
    
    
}
    
    
switchBtn.addEventListener('click',function(){
    let firstCurrencySelected = document.getElementById('from-currency')
    let SecondCurrencySelected = document.getElementById('to-currency')

    let firstCurrency = firstCurrencySelected.value
    let secondCurrency = SecondCurrencySelected.value

    firstCurrencySelected.value = secondCurrency
    SecondCurrencySelected.value = firstCurrency

}) 