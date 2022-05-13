// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const randomNumbers = [];
const randomNumbersRow = document.getElementById("random-numbers_row");
const resultBox = document.getElementById("result_box");
const timer = 6;

function startGame() {
    while (randomNumbers.length < 5) {
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber);
            const numberSlot = document.createElement("div");
            randomNumbersRow.append(numberSlot);
            numberSlot.classList.add("number-slot");
            numberSlot.innerHTML = randomNumber;
        }
    };
    
    setTimeout(function() {
        randomNumbersRow.style.display = "none";
    }, (timer - 1) * 1000);

    setTimeout(function() {
        const userNumbers = [];
        for (let i = 0; i < 5; i++) {
            const num = Number(prompt("Inserisci un numero"));
            userNumbers.push(num);
        }
        const matchingNumbers = [];
        for (let i = 0; i < userNumbers.length; i++) {
            let num = userNumbers[i];
            if (randomNumbers.includes(num) && userNumbers.includes(num)) {
                matchingNumbers.push(num);
                const matchingNumberSlot = document.createElement("div");
                resultBox.append(matchingNumberSlot);
                matchingNumberSlot.classList.add("number-slot");
                matchingNumberSlot.innerHTML = num;
            }
        }
    }, timer * 1000);
}