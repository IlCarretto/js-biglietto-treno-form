// DATI
// 0.21 € al km
// 20% minorenni
// 40% over 65

// Input dell'utente

// Chiedere il numero di km da percorrere
const kmTravelledInput = (document.getElementById("kilometers"));
console.log(kmTravelledInput, typeof(kmTravelledInput));

// Chiedere l'età
const userAgeInput = (document.getElementById("user-age"));
console.log(userAgeInput, typeof(userAgeInput));

const submitBtn = document.getElementById("submit");
console.log(submitBtn);
const title = document.querySelector("h1");
console.log(title);

// Click sul bottone
submitBtn.addEventListener("click", function () {
    // Prendo il valore degli input
    const kmTravelled = parseInt(kmTravelledInput.value);
    console.log(kmTravelled, typeof(kmTravelled));
    const userAge = userAgeInput.value;
    console.log(userAge, typeof(userAge));

    // Converto i km in euro
    const kmPrice = kmTravelled * 0.21;
    console.log(kmPrice, typeof(kmPrice));

    // Sconto il risultato in base all'età
    if (userAge > 18 ) {
        ticketPrice = kmPrice - (kmPrice * 20 / 100);
        console.log(ticketPrice, typeof(ticketPrice)); 
    } else if (userAge > 65) {
        ticketPrice = kmPrice - (kmPrice * 40 / 100);
        console.log(ticketPrice, typeof(ticketPrice));
    } else {
        ticketPrice = kmPrice;
    }

    ticketPrice = Math.round(ticketPrice * 100) / 100;

    // Inserisco il valore in h1
    title.innerHTML = `Il prezzo del tuo biglietto è ${ticketPrice}!`
    console.log(title.innerHTML);

    // Ripulisco gli input
    kmTravelledInput.value = "";
    userAgeInput.value = "";
})