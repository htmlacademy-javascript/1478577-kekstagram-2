import {
  COMMENT_MAX_LENGTH,
  HASHTAG_MAX_LENGTH,
  HASHTAGS_MAX
} from './data.js';

const uploadForm = document.querySelector('.img-upload__form');
const hashtagInput = uploadForm.querySelector('.text__hashtags');
const messageTextarea = uploadForm.querySelector('.text__description');

let errorMessage = '';
const getErrorMessage = () => errorMessage;

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__form',
  errorTextParent: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const isHashtagsInputTextValid = (inputText) => {
  if (!inputText) {
    return true;
  }

  const hashtags = inputText.toLowerCase().trim().split(/\s+/);

  const rules = [{
    check: hashtags.some((hashtag) => hashtag[0] !== '#'),
    error: 'Хэштег должен начинаться с символа \'#\''
  },
  {
    check: hashtags.some((hashtag) => !/^#[A-Za-z0-9]+$/.test(hashtag)),
    error: 'Хэштег должен состоять из букв и чисел и не может содержать #, @, $, -, :, , и т. д.'
  },
  {
    check: hashtags.some((hashtag) => hashtag === '#'),
    error: 'Хэштег не может состоять только из одной решётки'
  },
  {
    check: hashtags.some((hashtag) => hashtag.length > HASHTAG_MAX_LENGTH),
    error: `Максимальная длина одного хэштега ${HASHTAG_MAX_LENGTH} символов, включая решётку`
  },
  {
    check: hashtags.some((hashtag) => hashtag.slice(1).includes('#')),
    error: 'Хэштеги разделяются пробелами'
  },
  {
    check: hashtags.some((hashtag) => hashtag.slice(1).includes('#')),
    error: 'Один и тот же хэштег не может быть использован дважды'
  },
  {
    check: hashtags.length > HASHTAGS_MAX,
    error: `Нельзя указать больше ${HASHTAGS_MAX} хэштегов`
  }
  ];

  return rules.every((rule) => {
    const isInvalid = rule.check;
    if (isInvalid) {
      errorMessage = rule.error;
    }
    return !isInvalid;
  });
};

const isCommentInputTextValid = (inputText) => {
  if (!inputText) {
    return true;
  }
  const isInvalid = inputText.length > COMMENT_MAX_LENGTH;
  errorMessage = 'Длина комментария не может составлять больше 140 символов';
  return !isInvalid;
};

pristine.addValidator(hashtagInput, isHashtagsInputTextValid, getErrorMessage);
pristine.addValidator(messageTextarea, isCommentInputTextValid, getErrorMessage);
//Д21. Поиск элементов по селекторам делается минимальное количество раз, после этого ссылки на элементы сохраняются.


export {pristine};
