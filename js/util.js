import {
  ID,
  ID_MAX,
  ID_MIN,
} from './data';

let indentifier;

//генератор случайного числа
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//получение id
const getID = () => {
  if (ID.length > ID_MAX) {
    return 'Фото кончились';
  }
  indentifier = getRandomInteger(ID_MIN, ID_MAX);
  while (ID.includes(indentifier)) {
    indentifier = getRandomInteger(ID_MIN, ID_MAX);
  }
  ID.push(indentifier);
  return indentifier;
};

//функция получения элемента из массива
const getElement = (array) => array[getRandomInteger(0, array.length - 1)];

export {
  getRandomInteger,
  getID,
  getElement,
  indentifier,
};
