require('../src/db/mongoose')
const User = require('../src/models/user')



User.findByIdAndUpdate('5ed8bccd710aa81bcc3765f5', {age: 1}).then((user) => {
    console.log(user)

    return User.countDocuments({age: 1})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})