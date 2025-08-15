document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.modal');
  const modalInputs = document.querySelectorAll('.modal__inp');
  const joinBtn = document.querySelector('.modal__btn');

  if (!modal) return;

  document.body.addEventListener('click', (e) => {
    if (e.target.closest('.hero__main-btn')) {
      modal.classList.add('active');
    } else if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  joinBtn.addEventListener('click', (e) => {
    let allFilled = true;

    modalInputs.forEach(inp => {
      const oldError = inp.parentElement.querySelector('.error');
      if (oldError) oldError.remove();

      let errorMsg = '';
      if (inp.placeholder.includes('Ismingiz')) {
        errorMsg = 'Iltimos, ismingizni kiriting';
      } else if (inp.placeholder.includes('+998')) {
        errorMsg = 'Iltimos, Malumotlarni kiriting ';
      }

      if (inp.value.trim() === '') {
        allFilled = false;

        const errorEl = document.createElement('div');
        errorEl.classList.add('error');
        errorEl.textContent = errorMsg;
        inp.insertAdjacentElement('afterend', errorEl);
      } else {
        inp.style.border = '';
      }
    });

    if (!allFilled) {
      e.preventDefault(); 
    }
  });
});
