const express = require('express');
const { post } = require('../server');
const postDb = require('./postDb');

const router = express.Router();



router.get('/', async (req, res) => {
  // do your magic!
  const posts =  await postDb.get()
  if (posts) {
    res.status(200).json( {data: posts} );
  }
  
});

router.get('/:id', validatePostId(), async (req, res) => {
  // do your magic!
  res.status(200).json({ data: req.post })
});

router.delete('/:id', validatePostId(),  async (req, res) => {
  // do your magic!

  console.log(req.post.user_id)

  res.status(200).json({
    url: `/${id}`,
    operation: `DELETE user with id ${id}`
  })
});

router.put('/:id', (req, res) => {
  // do your magic!
});

// custom middleware

function validatePostId() {
  // do your magic!
return (req, res, next)=>{
  postDb.getById(req.params.id)
  .then( post =>{
    if(post) {
      req.post = post
      next();
    }else{
      res.status(400).json({message: `$ERR: ${req.params.id} post id was not found`})
    }
  })
  .catch(next)
}

}

module.exports = router;
