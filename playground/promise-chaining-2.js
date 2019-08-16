require('../src/db/mongoose')

const Task = require('../src/models/task')

// Task.findByIdAndDelete('5d1e05ab9e730e633c0f781a').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: true })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (task_id) => {
    const task = await Task.findByIdAndDelete(task_id)
    const task_count = await Task.countDocuments({ completed: false })
    return task_count
}

deleteTaskAndCount('5d20203f6fe400733cf44b16').then((task_count) => {
    console.log(task_count)
}).catch((e) => {
    console.log(e)
})
