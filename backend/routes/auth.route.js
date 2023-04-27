const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  try {
    if (name && email && password) {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        const hash = await bcrypt.hash(password, 8);
        let newUser = await User.create({ name, email, password: hash });
        newUser = {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
        };
        req.session.UserId = newUser.id;
        res.status(201).json(newUser);
      } else {
        res.status(403).json({ message: 'Маил существует' });
      }
    } else {
      res.status(403).json({ message: 'Заполните все поля' });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  try {
    if (email && password) {
      const user = await User.findOne({ where: { email } });
      if (user && (await bcrypt.compare(password, user.password))) {
        const findUser = {
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
        };
        req.sessions.userId = findUser.id;
        res.status(200).json(findUser);
      } else {
        res.status(403).json({ message: 'Маил пароль не подходят' });
      }
    } else {
      res.status(403).json({ message: 'Заполните поля' });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get('/logout', async (req, res) => {
  try {
    req.session.destroy((error) => {
      if (error) {
        return res.status(500).json({ message: 'Ошибка удаления сессии' });
      }
      res.clearCookie('user_sid').json({ message: 'Успешный выход' });
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get('/chekUser', async (req, res) => {
  try {
    const userSession = req.session.userId;
    if (userSession) {
      const user = await User.findOne({
        where: { id: userSession },
        attributes: { exclude: ['password'] },
      });
      res.status(200).json(user);
    } else {
      res.end();
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
