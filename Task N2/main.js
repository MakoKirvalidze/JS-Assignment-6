const colorInput = document.getElementById('inputColor');
const Btn = document.getElementById('btn');
const body = document.body;

const allowedColors = ['red', 'blue', 'green', 'black', 'white'];

Btn.addEventListener('click', (event) => {
  event.preventDefault();  // Prevent the default action (form submission, etc.)

  const enteredColor = colorInput.value.trim().toLowerCase();

  if (allowedColors.includes(enteredColor)) {
    body.style.backgroundColor = enteredColor;
  } else {
    alert('Please enter a valid color: red, blue, green, black, or white');
  }
});