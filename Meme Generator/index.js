const memeForm = document.getElementById('memeForm');
const imgInputEl = document.getElementById('imageUrl');
const topTextInputEl = document.getElementById('topText');
const bottomTextInputEl = document.getElementById('bottomText');
const memeContainer = document.getElementById('memeContainer');


memeForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!memeForm.checkValidity()) { // Checks if the form is valid with all fields filled out before submission
        memeForm.reportValidity();
        return;
    }

    const imgUrl = imgInputEl.value;
    const topText = topTextInputEl.value;
    const bottomText = bottomTextInputEl.value;

    const memeCard = document.createElement('div');
    memeCard.className = 'meme-card';

    const img = document.createElement('img');
    img.src = imgUrl;
    img.alt = 'Meme image';
    img.className = 'meme-image';


    const topDiv = document.createElement('div');
    topDiv.className = 'meme-text top';
    topDiv.textContent = topText;

    const bottomDiv = document.createElement('div');
    bottomDiv.className = 'meme-text bottom';
    bottomDiv.textContent = bottomText;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-meme';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        memeContainer.removeChild(memeCard);
    });

    memeCard.append(img, topDiv, bottomDiv, deleteButton);
    memeContainer.appendChild(memeCard);

    imgInputEl.value = '';
    topTextInputEl.value = '';
    bottomTextInputEl.value = '';
});