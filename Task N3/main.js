const numbersInput = document.getElementById('numbersInput');
const averageBtn = document.getElementById('averageBtn');
const resultText = document.getElementById('result');

averageBtn.addEventListener('click', () => {
  const numbers = numbersInput.value.split(':').map(Number);
  const validNumbers = numbers.filter(num => !isNaN(num));

  if (validNumbers.length === 0) {
    resultText.textContent = 'Please enter valid numbers.';
  } else {
    const sum = validNumbers.reduce((acc, curr) => acc + curr, 0);
    const average = sum / validNumbers.length;
    resultText.textContent = `The average is: ${average}`;
  }
});