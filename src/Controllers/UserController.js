const UserService = require('../Services/UserService');
const { generateToken, verifyToken } = require('../Token');


const findUser = async (req, res, next) => {
  const { id } = req.params;
  
  const user = await UserService.findUser(+id);
  
  if (!user) return next({ error: 404, message: 'User does not exist' });

  if (user.error) return next({ error: user.error, message: user.message });

  return res.status(200).json(user);
};

const getLogin = async (req, res, next) => {
  const { email, password } = req.body;
  
  const user = await UserService.getLogin(email, password);
  
  if (!user) return next({ error: 404, message: 'User does not exist' });

  if (user.error) return next({ error: user.error, message: user.message });

  const token = generateToken({ id: user.id, email });
  const objLocalStorage = {
    userName: user.userName,
    email,
    token,
  };
  return res.status(200).json(objLocalStorage);
};

const createUser = async (req, res, next) => {
  const { userName, firstName, lastName, email, password } = req.body;
  
  const createdUser = await UserService.createUser(userName, firstName, lastName, email, password);

  if (!createdUser) return next({ error: 409, message: 'User already exists.' });

  const { id } = createdUser;

  const token = generateToken({ id, email });
  const objLocalStorage = {
    userName,
    email,
    token,
  };

  return res.status(201).json(objLocalStorage);
};

const validateUser = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return next({ error: 400, message: 'UNAUTHORIZED' });

  const authorized = verifyToken(authorization);

  if (!authorized) return next({ error: 400, message: 'UNAUTHORIZED' });

  return res.status(200).json(authorized);
};


module.exports = {
  findUser,
  getLogin,
  createUser,
  validateUser,
};
