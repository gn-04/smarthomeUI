const slider = document.getElementById('slider');
const valueDisplay = document.getElementById('value');

slider.addEventListener('input', (e) => {
  console.log(slider.value);
    valueDisplay.textContent = slider.value;
});