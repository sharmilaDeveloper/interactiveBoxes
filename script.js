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
      boxes.forEach((box, index) => {
        const radio = box.querySelector('input[type="radio"]');
        if (radio.id === selectedId) {
          box.classList.add('highlight');
          const price = prices[selectedId];
          totalDisplay.textContent = `Total: $${price.toFixed(2)} USD`;
        } else {
          box.classList.remove('highlight');
        }
      });
    }
  
    const checkedRadio = document.querySelector('input[name="unit"]:checked');
    if (checkedRadio) {
      updateUI(checkedRadio.id);
    }
  
    radios.forEach(radio => {
      radio.addEventListener('change', () => {
        updateUI(radio.id);
      });
    });
  });
  