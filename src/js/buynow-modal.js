// buy-now
(() => {
  const refs = {
    openModalBtn: document.querySelector('[buynow-modal-open]'),
    closeModalBtn: document.querySelector('[buynow-modal-close]'),
    modal: document.querySelector('[buynow-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

//buynow mobile
(() => {
  const refs = {
    openModalBtn: document.querySelector('[buynowmob-modal-open]'),
    closeModalBtn: document.querySelector('[buynowmob-modal-close]'),
    modal: document.querySelector('[buynow-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
