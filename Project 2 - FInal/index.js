const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encrypt(message, shiftValue) {
    let encryptedMessage = "";
    let plainCharsProcessed = 0;

    function encryptCharacter(char) {
        const index = alphabet.indexOf(char.toLowerCase());
        if (index === -1) {
            return char; // Non-alphabetic characters are returned unchanged
        }
        const shiftedIndex = (index + shiftValue) % alphabet.length;
        return alphabet[shiftedIndex];
    }

    function getRandomLetter() {
        return alphabet[Math.floor(Math.random() * alphabet.length)]; // Generate a random letter from the alphabet
    }

    for (let char of message) {
        encryptedMessage += encryptCharacter(char);
        plainCharsProcessed += 1;
        if (plainCharsProcessed % 2 === 0) {
            encryptedMessage += getRandomLetter(); // Inserts a random letter after every two plain characters
        }
    }

    return encryptedMessage;
}



function decrypt(encryptedMessage, shiftValue) {
         let decryptedMessage = "";
         let realCharsCount = 0;

        function decryptCharacter(char) {
            const index = alphabet.indexOf(char.toLowerCase());
            if (index === -1) {
                return char;  
            }
            let downshiftedIndex = (index - shiftValue) % alphabet.length;
            if (downshiftedIndex < 0) { 
                downshiftedIndex += alphabet.length; // Handles negative indices by wrapping around the alphabet
            } 
            return alphabet[downshiftedIndex];

        }
        let i = 0;
        while (i < encryptedMessage.length) {
            if (realCharsCount === 2) {
                i += 1; // Skips the random character after every two real characters
                realCharsCount = 0; 
                continue
            }
            decryptedMessage += decryptCharacter(encryptedMessage[i]);
            realCharsCount += 1; 
            i += 1; 
        }

    return decryptedMessage;

}

console.log(decrypt("Iuuuau juxuu cuytudyuwxuj uixuqtuemu euv uHeuckubkui uqdut uHuuckui.u Juxuuhuu, umxuyiufuuh ujxuu umeuhtu 'uQkuhuubyukiu' ujeu juxuu muydutiu. uQdut urou ruuyudwu qurbuu ujeu wuuju jue ujxuyiu cuuiuiquwuu, uoeuk uxquluu suecufbuujuutu juxuu gukuuiju!", 42));