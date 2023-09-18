let counter = 0;

function updateStars() {
    const starsDiv = document.getElementById('stars');
    starsDiv.innerHTML = '';
    for (let i = 0; i < counter; i++) {
        const starImg = document.createElement('img');
        starImg.src = 'stars.png';
        starsDiv.appendChild(starImg);
    }
}

document.getElementById('add-button').addEventListener('click', function () {
    counter++;
    document.getElementById('counter').innerText = counter;
    updateStars();
});

document.getElementById('remove-button').addEventListener('click', function () {
    if (counter > 0) {
        counter--;
        document.getElementById('counter').innerText = counter;
        updateStars();
    }
});
