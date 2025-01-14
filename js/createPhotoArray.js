import {
  LIKE_MIN,
  LIKE_MAX,
  COMMENT_MIN,
  COMMENT_MAX,
  ID_MAX,
} from './data.js';

import {
  getRandomInteger,
  getID,
  indentifier,
} from './util.js';

import {
  createComment
} from './createComment.js';


// console.log(createComment()); Почему при таком выводе в консоле выводится функция, но при создании массива всё нормально и создаются объекты?

//функция создания объекта фото
const createPhoto = () => ({
  id: getID(),
  url: `photos/${indentifier}.jpg`,
  description: `Это фотография №${indentifier}`,
  likes: getRandomInteger(LIKE_MIN, LIKE_MAX),
  comments: Array.from({ length: getRandomInteger(COMMENT_MIN, COMMENT_MAX) }, createComment()),
});

const photosArray = Array.from({ length: ID_MAX }, createPhoto);

export {
  photosArray
};
