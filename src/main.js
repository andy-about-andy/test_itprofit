import "./sass/style.scss";
import {modalOpen, modalClose} from './js/modal';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    modalOpen();
    modalClose();
  });
});
