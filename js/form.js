import { isEscapeKey } from './util';
const uploadForm = document.querySelector('.img-upload__form');
const pageBody = document.querySelector('body');
const uploadInput = uploadForm.querySelector('.img-upload__input');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const uploadCancelBtn = document.querySelector('.img-upload__cancel');

const onCancelBtnClick = () => {
  closePhotoEditor();
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePhotoEditor();
  }
};

function closePhotoEditor() {
  uploadOverlay.classList.add('hidden');
  pageBody.classList.remove('modal-open');
  uploadCancelBtn.addEventListener('click', onCancelBtnClick);
  document.removeEventListener('keydown', onDocumentKeydown);
  uploadInput.value = '';
}

const initUploadModal = () => {
  uploadInput.addEventListener('change', () => {
    uploadOverlay.classList.remove('hidden');
    pageBody.classList.add('modal-open');
    uploadCancelBtn.addEventListener('click', onCancelBtnClick);
    document.addEventListener('keydown', onDocumentKeydown);
  });
};

export {
  initUploadModal
};
