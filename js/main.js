const COMMETS = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const NAMES = ['Иван', 'Пётр', 'Анастасия', 'Николай', 'Мария', 'Егор', 'Александр', 'Екатерина'];

const ID = [];
const ID_MAX = 25;
const ID_MIN = 1;
const LIKE_MIN = 15;
const LIKE_MAX = 200;
const COMMENT_MIN = 0;
const COMMENT_MAX = 30;
const AVATAR_MIN = 1;
const AVATAR_MAX = 6;

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


const createComment = () => {
  let id = 0;
  return () => ({
    id: id++,
    avatar: `img/avatar-${getRandomInteger(AVATAR_MIN, AVATAR_MAX)}.svg`,
    message: getElement(COMMETS),
    name: getElement(NAMES),
  });
};

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


// eslint-disable-next-line no-console
console.log(photosArray);
