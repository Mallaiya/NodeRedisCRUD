const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home');
const addTaskController = require('../controllers/addTask');
const deleteTaskController = require('../controllers/deleteTask.js');
const addContactController = require('../controllers/addContact');

/* GET home page. */
router.get('/', async (_req, res, _next) => {
  const { tasks, contact } = await homeController();
  res.render('home', {
    title: 'Redis Application',
    topic: 'Todo Lists',
    tasks,
    contact
  });
});

/* Create Todo. */
router.post('/task', async (req, res, _next) => {
  const { body } = req;
  await addTaskController(body);
  res.redirect('/');
});

/* Delete Todo. */
router.post('/task/delete', async (req, res, _next) => {
  const { body } = req;
  await deleteTaskController(body);
  res.redirect('/');
});

/* POst Contact. */
router.post('/contact', async (req, res, _next) => {
  const { body } = req;
  await addContactController(body);
  res.redirect('/');
});

module.exports = router;
