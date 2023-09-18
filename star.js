let counter = 0;

document.getElementById('add-button').addEventListener('click', function() {
    counter++;
    document.getElementById('counter').innerText = counter;
});

document.getElementById('remove-button').addEventListener('click', function() {
    if (counter > 0) {
        counter--;
        document.getElementById('counter').innerText = counter;
    }
});