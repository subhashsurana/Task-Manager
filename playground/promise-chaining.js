require('../src/db/mongoose')

const User = require('../src/models/user')
const Task = require('../src/models/task')

// User.findByIdAndUpdate('5d21cec2bd7ca86284463dd8',{age: 1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age:1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })


const updateAgeAndCount  = async (id,age) => {
    const user = await User.findByIdAndUpdate(id,{age},)
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('5d21cec2bd7ca86284463dd8',2).then((count) => {
    console.log(count)
}).catch((e)=> {
    console.log(e)
})

