// DATI
// 0.21 € al km
// 20% minorenni
// 40% over 65
// Aggiungere +20 euro se medium class, +40 se first class, altrimenti 0

// Input dell'utente

// Chiedere il numero di km da percorrere
const kmTravelledInput = (document.getElementById("kilometers"));
console.log(kmTravelledInput, typeof(kmTravelledInput));

// Chiedere l'età
const userAgeInput = (document.getElementById("user-age"));
console.log(userAgeInput, typeof(userAgeInput));

// Chiedere classe
const userClassInput = document.getElementById("user-class")
console.log(userClassInput);

const submitBtn = document.getElementById("submit");
console.log(submitBtn);
const title = document.getElementById("final-price");
console.log(title, typeof(title));

// Click sul bottone
submitBtn.addEventListener("click", function () {
    // Prendo il valore degli input
    const kmTravelled = parseInt(kmTravelledInput.value);
    console.log(kmTravelled, typeof(kmTravelled));
    const userAge = userAgeInput.value;
    console.log(userAge, typeof(userAge));
    const userClass = userClassInput.value;
    console.log(userClass, typeof(userClass));

    // Converto i km in euro
    const kmPrice = kmTravelled * 0.21;
    console.log(kmPrice, typeof(kmPrice));

    // Sconto il risultato in base all'età
    if (userAge === "minorenne" ) {
        ticketPrice = kmPrice - (kmPrice * 20 / 100);
        console.log(ticketPrice, typeof(ticketPrice)); 
    } else if (userAge === "over65") {
        ticketPrice = kmPrice - (kmPrice * 40 / 100);
        console.log(ticketPrice, typeof(ticketPrice));
    } else {
        ticketPrice = kmPrice;
    }

    // Aggiungere +20 euro se medium class, +40 se first class, altrimenti 0
    if (userClass === "medium") {
        ticketPrice = ticketPrice + 20;
    } else if (userClass === "first-class") {
        ticketPrice = ticketPrice + 40
    } else {
        ticketPrice = ticketPrice;
    }

    ticketPrice = Math.round(ticketPrice * 100) / 100;

    // Inserisco il valore in h1
    title.innerHTML = `IMPORTO TOTALE PAGATO $${ticketPrice}!`
    console.log(title.innerHTML);

    // Inserisco il posto casuale assegnato
    let value = Math.floor(Math.random() * 200) +1;
    console.log(value);

    const trainSpot = document.querySelector(".train-spot");
    console.log(trainSpot);

    trainSpot.innerHTML = `${value}`

    // Inserisco i punti freccia casuali
    let value2 = Math.floor(Math.random() * 1000) +1;
    console.log(value);

    const trainPoints = document.querySelector(".train-points");
    console.log(trainPoints);

    trainPoints.innerHTML = `${value2}`

    // Inserisco codice biglietto casuale
    let value3 = Math.floor(Math.random() * 10000) +1;

    const trainCode = document.querySelector(".train-code");
    trainCode.innerHTML += ` ${value3}`

    // Inserisco la classe in HTML
    // let trainClass = this.querySelector(".train-class")
    // trainClass.innerHTML = `${userClass}`

    // Inserisco il nome del passeggero
    const Name = document.querySelector(".name").value;
    const Surname = document.querySelector(".surname").value;
    const fullName = Name + " " + Surname;
    console.log(fullName);
    const passengerName = document.querySelector(".passenger-name");
    passengerName.innerHTML = ` ${fullName}`;
    const passengerAge = document.querySelector(".passenger-age");
    console.log(passengerAge);
    // passengerAge.innerHTML = ` ${userAge}`;


    // Ripulisco gli input
    kmTravelledInput.value = "";
    userAgeInput.value = "";
    userClassInput.value = "";
})