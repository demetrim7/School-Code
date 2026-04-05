const friend = "BRUTUS"
const shiftValue = 3;

const latinApl = "abcdefghijklmnopqrstuvwxyz";

let newVar = "";

for (let i = 0; i < friend.length; i++) {
    const currentLetter = friend[i];
    const currentIndex = latinApl.indexOf(currentLetter.toLowerCase())
    const newIndex = (currentIndex + shiftValue) % latinApl.length;
    let encryptedLetter = latinApl[newIndex].toUpperCase();
    newVar += encryptedLetter;
}; 

//Using a loop rather than manually encrypting every letter at a time makes us complete the task way quicker and makes the code more readable and compact.

// % latinAlp.length helps us out in this loop in how it doesn't encrypt a letter to an absent value. It instead starts back at the letter a if the shift value goes over the letter z.
