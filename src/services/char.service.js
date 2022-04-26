const char = [
  {
  //   id: 1,
  //   title: 'A divina comédia',
  //   author: 'Dante Alighieri',
  //   price: 340,
  //   img: './assets/img/divinaComedia.jpg',
  // },
  // {
  //   id: 2,
  //   title: 'O Capital',
  //   author: 'Karl Marx',
  //   price: 39,
  //   img: './assets/img/capital.png',
  // },
  // {
  //   id: 3,
  //   title: 'Sidarta',
  //   author: 'Hermann Hesse',
  //   price: 20,
  //   img: './assets/img/sidarta.jpg',
  // },
  // {
  //   id: 4,
  //   tittle: 'A arte da guerra',
  //   author: 'Sun Tzu',
  //   price: 41,
  //   img: './assets/img/arte-guerra.jpg',
   },
];

const findCharService = () => {
  return char;
};

const findCharByIdService = (id) => {
  return char.find((char) => char.id == id);
};

const updateCharService = (id, charEdited) => {
  charEdited['id'] = id;
  const charIndex = char.findIndex((char) => char.id == id);
  char[charIndex] = charEdited;
  return charEdited;
};

const createCharService = (newChar) => {
  newChar.id = char.length + 1;
  char.push(newChar);
  return newChar;
};

const deleteCharService = (id) => {
  const charIndex = char.findIndex((char) => char.id == id);
  return char.splice(charIndex, 1);
};

module.exports = {
  findCharService,
  findCharByIdService,
  updateCharService,
  createCharService,
  deleteCharService
};
