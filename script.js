//your JS code here. If required.
const codes = document.querySelectorAll('.code');


codes[0].focus();

codes.forEach((code, index) => {
  code.addEventListener('keydown', (e) => {

    // Allow only numbers and backspace
    if (
      e.key >= '0' && e.key <= '9'
    ) {
      code.value = '';
      setTimeout(() => {
        if (index < codes.length - 1) {
          codes[index + 1].focus();
        }
      }, 10);
    }

    else if (e.key === 'Backspace') {
      code.value = '';
      if (index > 0) {
        setTimeout(() => {
          codes[index - 1].focus();
        }, 10);
      }
    }

    else {
      e.preventDefault();
    }
  });
});
