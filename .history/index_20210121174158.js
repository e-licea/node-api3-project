// code away!
const server = require('./server');

const PORT = process.env.PORT || 4000 






server.listen(PORT, ()=>{
    console.log(`Server is active and running on PORT : ${PORT}`);
})