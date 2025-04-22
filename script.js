document.addEventListener("DOMContentLoaded", () => {
  const prices = {
    unit1: 10.00,
    unit2: 18.00,
    unit3: 24.00
  };

  const radios = document.querySelectorAll('input[name="unit"]');
  const boxes = document.querySelectorAll('.unit-option');
  const totalDisplay = document.querySelector('.total');

  function updateUI(selectedId) {
    boxes.forEach((box) => {
      const radio = box.querySelector('input[type="radio"]');
      const options = box.querySelector('.options');

      if (radio.id === selectedId) {
        radio.checked = true;
        box.classList.add('highlight');
        if (options) options.style.display = 'block';
        totalDisplay.textContent = `Total: $${prices[selectedId].toFixed(2)} USD`;
      } else {
        box.classList.remove('highlight');
        if (options) options.style.display = 'none';
      }
    });
  }


  boxes.forEach((box) => {
    box.addEventListener('click', () => {
      const radio = box.querySelector('input[type="radio"]');
      updateUI(radio.id);
    });
  });

  const defaultRadio = document.querySelector('input[name="unit"]:checked');
  if (defaultRadio) updateUI(defaultRadio.id);
});
