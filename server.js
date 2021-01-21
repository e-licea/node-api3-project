
const express = require('express');
const server = express();
const postRouter = require('./posts/postRouter');

server.use(logger, postRouter)

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  console.log(`user-agent: ${req.method}, url: ${req.url}, time: ${new Date().getTime()}`)
  next()
}

function validateUserID (req, res, next){
    console.log(`Hello There`)
  next();
}

module.exports = server;