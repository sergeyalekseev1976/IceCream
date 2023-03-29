// ingredients

(() => {
  const refs = {
    openModalBtn: document.querySelector('[ingredients-one-modal-open]'),
    closeModalBtn: document.querySelector('[ingredients-modal-close]'),
    modal: document.querySelector('[ingredients-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[ingredients-two-modal-open]'),
    closeModalBtn: document.querySelector('[ingredients-modal-close]'),
    modal: document.querySelector('[ingredients-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[ingredients-three-modal-open]'),
    closeModalBtn: document.querySelector('[ingredients-modal-close]'),
    modal: document.querySelector('[ingredients-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
