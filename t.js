const userForm = document.getElementById('userForm');
const nameInput = document.getElementById('name');
const colorSelect = document.getElementById('color');
const messageDiv = document.getElementById('message');
const submitBtn = document.getElementById('submitBtn');
const resetBtn = document.getElementById('resetBtn');

userForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = nameInput.value;
    const color = colorSelect.value;

    if (name.trim() !== '') {
        const message = `Hello, ${name}! Your favorite color is ${color}.`;
        messageDiv.innerText = message;
        messageDiv.style.color = color;
    } else {
        messageDiv.innerText = 'Please enter your name.';
        messageDiv.style.color = 'black';
    }
});

resetBtn.addEventListener('click', function() {
    userForm.reset();
    messageDiv.innerText = '';
});