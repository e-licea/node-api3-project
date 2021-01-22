const express = require('express');
const userDb = require('./userDb');
const router = express.Router();

router.post('/', (req, res) => {
  // do your magic!
  res.status(200).json({message: 'hello from the users root.'})
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', async(req, res) => {
  // do your magic!
  const users = await userDb.get()
  .then( users =>{
    res.status(200).json({users: users})
  }).catch(err=>{
    res.status(500).json({err: `ERR: ${err}`})
  })
});

router.get('/:id', validateUserId(), (req, res) => {
  // do your magic!


  res.status(200).json({user: req.user})
});

router.get('/:id/posts', validateUserId(), async (req, res) => {
  // do your magic!
  const userPosts = await userDb.getUserPosts(req.user.id)

  res.status(200).json({message: userPosts})

});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId() {
  // do your magic!
  return (req, res, next) =>{
   userDb.getById(req.params.id)
   .then( user =>{
     if(user) {
       req.user = user
       next()
     }else{
       res.status(400).json({message: `User not found!`})
     }
   })
  }
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
