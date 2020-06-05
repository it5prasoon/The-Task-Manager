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