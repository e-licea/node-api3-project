const express = require('express');
import { post } from '../server';
import postDb from './postDb';

const router = express.Router();



router.get('/', (req, res) => {
  // do your magic!
  const posts = postDb.get()
  
  res.status(200).json({posts: posts})
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
}

module.exports = router;
