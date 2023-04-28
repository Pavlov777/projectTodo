const router = require('express').Router();
const { User, Todo } = require('../db/models');

router
  .get('/todos', async (req, res) => {
    try {
      const todos = await Todo.findAll({ raw: true });
      res.json(todos);
    } catch ({ message }) {
      res.json(message);
    }
  })
  .post('/todos', async (req, res) => {
    try {
      const { title, description } = req.body;
      const newTodo = await Todo.create({ title, description });
      res.json(newTodo);
    } catch ({ message }) {
      res.json(message);
    }
  })
  .delete('/todos/:TodoId', async (req, res) => {
    try {
      const { TodoId } = req.params;
      const result = await Todo.destroy({ where: { id: TodoId } });
      if (result) {
        res.json(TodoId);
      }
    } catch ({ message }) {
      res.json(message);
    }
  });

// router.put('/todos', async (req, res) => {
//   try {
//     // const { TodoId } = req.params;
//     const { title, description } = req.body;
//     if (title && description) {
//       const todosh = await Todo.findOne({ where: { id: TodoId } });
//       todosh.title = title;
//       todosh.description = description;
//       todosh.save();
//       res.json({ message: 'complete' });
//     } else {
//       res.json({ message: 'Заполните все поля!' });
//     }
//   } catch (error) {
//     res.send(error.message);
//   }
// });

router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll({ raw: true });
    res.json(users);
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
