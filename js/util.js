import {
  ID_MAX,
  ID_MIN,
  COMMENT_ID_MIN,
  COMMENT_ID_MAX
} from './data';

//генератор случайного числа
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//получение id
const getID = (min, max) => {
  const IDENTIFIERS = [];
  return () => {
    if (IDENTIFIERS.length >= (max - min + 1)) {
      return;
    }
    let indentifier = getRandomInteger(min, max);
    while (IDENTIFIERS.includes(indentifier)) {
      indentifier = getRandomInteger(min, max);
    }
    IDENTIFIERS.push(indentifier);
    return indentifier;
  };
};

//переменные для каждого уникального идентификатора

const generateIdPhoto = getID (ID_MIN, ID_MAX);
const generateUrlPhoto = getID (ID_MIN, ID_MAX);
const generateIdComment = getID (COMMENT_ID_MIN, COMMENT_ID_MAX);


//функция получения элемента из массива
const getRandomElement = (array) => array[getRandomInteger(0, array.length - 1)];

export {
  getRandomInteger,
  getID,
  getRandomElement,
  generateIdPhoto,
  generateUrlPhoto,
  generateIdComment
};
