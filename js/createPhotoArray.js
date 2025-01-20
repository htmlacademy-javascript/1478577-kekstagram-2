import {
  LIKE_MIN,
  LIKE_MAX,
  COMMENT_MIN,
  COMMENT_MAX,
  ID_MAX,
} from './data.js';

import {
  getRandomInteger,
  generateIdPhoto,
  generateUrlPhoto,
} from './util.js';

import {
  createComment
} from './createComment.js';


//функция создания объекта фото
const createPhoto = () => {
  const id = generateIdPhoto();
  return {
    id: id,
    url: `photos/${generateUrlPhoto()}.jpg`,
    description: `Это фотография №${id}`,
    likes: getRandomInteger(LIKE_MIN, LIKE_MAX),
    comments: Array.from({ length: getRandomInteger(COMMENT_MIN, COMMENT_MAX) }, createComment),
  };
};

const photosArray = Array.from({ length: ID_MAX }, createPhoto);

export {
  photosArray
};
