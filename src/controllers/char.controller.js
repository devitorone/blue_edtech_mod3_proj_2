const charService = require('../services/char.service');

const findCharController = (req, res) => {
  res.send(charService.findCharService());
};

const findCharByIdController = (req, res) => {
  res.send(charService.findCharService(req.params.id));
};

const createCharController = (req, res) => {
  if (
    !req.body ||
    !req.body.title ||
    !req.body.author ||
    !req.body.price ||
    !req.body.img
  ) {
    return res.status(400).send({ message: 'Envie o objeto completo!' });
  }
  res.send(charService.createCharService(req.params.id));
};

const updateCharController = (req, res) => {
  res.send(charService.updateCharService(+req.params.id, req.body));
};

const deleteCharController = (req, res) => {
  charService.deleteCharService(req.params.id);
  res.send({ message: 'Livro deletado com sucesso!' });
};

module.exports = {
  findCharController,
  findCharByIdController,
  createCharController,
  updateCharController,
  deleteCharController,
};