function getRandomColor() { 
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

//const h1 = document.querySelector('h1');


//setInterval(function() {
//    h1.style.color = getRandomColor();
//}, 500);

const letters = document.querySelectorAll('.letter');

const intervalId =setInterval(function() {
for(let letter of letters) {
    letter.style.color = getRandomColor();
}}, 1000); 