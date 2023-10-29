import "./sass/style.scss";
import {modalOpen, modalClose} from './js/modal';
import {validation} from './js/validation';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    modalOpen();
    modalClose();
    validation();
  });
});
