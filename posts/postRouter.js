const express = require('express');
const { post } = require('../server');
const postDb = require('./postDb');

const router = express.Router();



router.get('/', (req, res, next) => {
  // do your magic!


  next();
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
  const id = req.params.id;

  res.status(200).json({
    url: `/${id}`,
    operation: `DELETE user with id ${id}`
  })
});

router.put('/:id', (req, res) => {
  // do your magic!
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
}

module.exports = router;
