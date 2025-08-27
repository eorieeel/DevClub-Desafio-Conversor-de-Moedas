const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const CurrencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real
    const CurrencyValueConverted = document.querySelector(".currency-value") // Outras Moedas

    console.log(currencySelect.value)

    const dolarToday = 5.47
    const euroToday = 6.35
    const libraToday = 7.33
    const bitcoinToday = 633238.68
    const realToday = 1
    
    if(currencySelect.value == "dolar"){
         CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    
    if(currencySelect.value == "euro"){
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("de-De", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
     if(currencySelect.value == "libra"){
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

     if(currencySelect.value == "bitcoin"){
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 8
        }).format(inputCurrencyValue / bitcoinToday)
    }

    CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)


        // dolar para outras moedas
}


function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar Americano" 
        currencyImage.src = "./assets/dolar.png"
        
    }

    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro" 
        currencyImage.src = "./assets/euro.png"
    }

    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra" 
        currencyImage.src = "./assets/libra.png"
    }

     if(currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin" 
        currencyImage.src = "./assets/bitcoin.png"
    }


    
    convertValues()
}


currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)


