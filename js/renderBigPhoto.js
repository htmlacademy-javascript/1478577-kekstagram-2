import {COMMENTS_NEXT} from './data';

const bigPhotoContainer = document.querySelector('.big-picture');
const urlBigPhoto = document.querySelector('.big-picture__img img');
const likeBigPhoto = document.querySelector('.likes-count');
const descriptionBigPhoto = document.querySelector('.social__caption');
const commentShowCount = document.querySelector('.social__comment-shown-count');
const commentTotalCount = document.querySelector('.social__comment-total-count');
const commentsContainer = document.querySelector('.social__comments');
const commentNode = document.querySelector('.social__comment');
const body = document.querySelector('body');
const cancelBigPhoto = document.querySelector('.big-picture__cancel');
const commentsLoader = document.querySelector('.comments-loader');
let currentCommentIndex = 0;
let currentComments = [];

const displayComments = (commentsArray) => {
  const nextComments = commentsArray.slice(currentCommentIndex, currentCommentIndex + COMMENTS_NEXT);
  nextComments.forEach(({ avatar, name, message }) => {
    const commentPhoto = commentNode.cloneNode(true);
    const commentAvatar = commentPhoto.querySelector('.social__picture');
    const commentText = commentPhoto.querySelector('.social__text');
    commentAvatar.src = avatar;
    commentAvatar.alt = name;
    commentText.textContent = message;
    commentsContainer.appendChild(commentPhoto);
  });
  currentCommentIndex += nextComments.length;
  commentShowCount.textContent = currentCommentIndex;
  if (currentCommentIndex >= commentsArray.length) {
    commentsLoader.classList.add('hidden');
  }
};

const loadMoreComments = () => {
  displayComments(currentComments);
};

const closePhoto = () => {
  bigPhotoContainer.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', closingByEsc);
  commentsLoader.removeEventListener('click', loadMoreComments);
};

function closingByEsc(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePhoto();
  }
}

const openBigPhoto = (url, description, likes, comments) => {
  bigPhotoContainer.classList.remove('hidden');
  body.classList.add('modal-open');
  urlBigPhoto.src = url;
  likeBigPhoto.textContent = likes;
  descriptionBigPhoto.textContent = description;
  commentShowCount.textContent = comments.length;
  commentTotalCount.textContent = comments.length;
  commentsContainer.innerHTML = '';
  commentsLoader.classList.remove('hidden');
  currentCommentIndex = 0;
  currentComments = comments;
  loadMoreComments();
  commentsLoader.addEventListener('click', loadMoreComments);
  document.addEventListener('keydown', closingByEsc);
  cancelBigPhoto.addEventListener('click', closePhoto);
};

export { openBigPhoto };
