// dice roller program
function RollDice() {
    const numofdice = document.getElementById("numofdice").value;
    const diceresult = document.getElementById("diceresult");
    const diceimages = document.getElementById("diceimages");
    const values = [];
    const images = [];

    // for loop to generate random number from 1 to 6 according to numofdice
    for (let i = 0; i < numofdice; i++) {
        const value = Math.floor(Math.random() * 6) + 1; // since it can be decimal we use floor
        values.push(value);
        images.push(`<img src="dice images/${value}.png" alt = "Dice ${value}">`);
    }

    diceresult.textContent = `dice: ${values.join(", ")}`;
    diceimages.innerHTML = images.join('');
}