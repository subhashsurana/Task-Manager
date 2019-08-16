const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
useNewUrlParser: true,
useCreateIndex: true,
useFindAndModify: false
})



// const task = new Task({
//     description: ' ABC ',
//     completed: true
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log('Error: ', error)
// })


// ---------------------------- USER CREATION --------------------------
// 
// const me = new User({
//     name: '   Subhash',
//     email: 'MYEMAIL@MEAD.IO',
//     password: ' asswor  '

// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error: ', error)
// })

//====================================
