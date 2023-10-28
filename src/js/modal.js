import {isEscapeKey} from './util';

const modal = document.querySelector('.modal');
const buttonOpen = document.querySelector('.btn--modal');
const buttonClose = modal.querySelector('.modal__close-btn');
const overlay = modal.querySelector('.modal__overlay');

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onModalClose();
  }
};

const overlayCloseModal = () => {
  onModalClose();
};

const modalOpen = () => {
  buttonOpen.addEventListener('click', () => {
    onModalOpen();
  });
};

const modalClose = () => {
  buttonClose.addEventListener('click', () => {
    onModalClose();
  });
};

const onModalOpen = () => {
  modal.classList.add('is-active');
  document.addEventListener('keydown', onModalEscKeydown);
  overlay.addEventListener('click', overlayCloseModal);
  document.body.style.overflow = 'hidden';
};

const onModalClose = () => {
  modal.classList.remove('is-active');
  document.removeEventListener('keydown', onModalEscKeydown);
  overlay.removeEventListener('click', overlayCloseModal);
  document.body.style.overflow = '';
};

export {modalOpen, modalClose};
