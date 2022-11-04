const validateEmail = (req, res, next) => {
  const { email } = req.body;

  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!email) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }

  return next();
};

const validatePassword = (req, res, next) => {
  const MINIMUM_PASSWORD_LENGTH = 6;
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  }

  if (password.length < MINIMUM_PASSWORD_LENGTH) {
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }

  return next();
};

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }

  if (authorization.length !== 16) {
    return res.status(401).json({ message: 'Token inválido' });
  }

  return next();
};

const validateName = (req, res, next) => {
  const MINIMUM_NAME_LENGTH = 3;
  const { name } = req.body;
  // console.log(req.body);

  if (!name) {
    return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  }

  if (name.length < MINIMUM_NAME_LENGTH) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }

  return next();

};

// const validateName = (req, res, next) => {
  
// }

// const validateName = (req, res, next) => {
  
// }

// const validateName = (req, res, next) => {
  
// }

module.exports = {
  validateEmail,
  validatePassword,
  validateToken,
  validateName,
};