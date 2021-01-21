// code away!
const server = require('./server');
const postRouter = require('./posts/postRouter');
const userRouter = require('./users/userRouter')
const PORT =  5000 



server.use(logger)
server.use('/posts', postRouter)

server.listen(PORT, ()=>{
    console.log(`Server is active and running on PORT : ${PORT}`);
})