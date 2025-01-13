import {
  AVATAR_MIN,
  AVATAR_MAX,
  COMMETS,
  NAMES,
} from './data';

import {
  getRandomInteger,
  getElement
} from './util';

const createComment = () => {
  let id = 0;
  return () => ({
    id: id++,
    avatar: `img/avatar-${getRandomInteger(AVATAR_MIN, AVATAR_MAX)}.svg`,
    message: getElement(COMMETS),
    name: getElement(NAMES),
  });
};

export {
  createComment
};
