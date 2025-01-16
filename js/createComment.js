import {
  AVATAR_MIN,
  AVATAR_MAX,
  COMMETS,
  NAMES,
} from './data';

import {
  getRandomInteger,
  getRandomElement,
  generateIdComment,
} from './util';

const createComment = () => ({
  id:  generateIdComment(),
  avatar: `img/avatar-${getRandomInteger(AVATAR_MIN, AVATAR_MAX)}.svg`,
  message: getRandomElement(COMMETS),
  name: getRandomElement(NAMES),
});

export {
  createComment
};
