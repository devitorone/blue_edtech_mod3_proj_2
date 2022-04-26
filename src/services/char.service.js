const Char = require ('../models/char')

const findCharService = async() => {
  return await Char.find();
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

const createCharService = async (newChar) => {
  
  return await Char.create(newChar);
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
