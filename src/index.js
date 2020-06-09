const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const app = express()
const port = process.env.PORT || 3000

const multer = require('multer')
const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('File must be a word document'))
        }

        cb(undefined, true)
    }
})


app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
}, (error, req, res, next) => {
    res.status(400).send( {error: error.message})
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port, () => {
    console.log('Server is up on port! ' + port)
})



// const main = async () => {
//     const task = await Task.findById('5ede24c513a6c41fc00cbd6d')
//     await task.populate('owner').execPopulate()
//     console.log(task.owner)
// }

// main()