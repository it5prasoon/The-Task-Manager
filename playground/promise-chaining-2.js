require('../src/db/mongoose')
const Task = require('../src/models/task')


Task.findByIdAndDelete('5ed8f21c21b3874dd868ea3b').then((task) => {
    console.log(task)
    return Task.countDocuments({completed: false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5eda0d5b171be64cb8fdc2e1').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})