// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
// console.log(id.id.length)
// console.log(id.toHexString().length)

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    
    // db.collection('users').findOne({name: 'Prasoon'}, (error, user) => {
    //     if (error) {
    //         return console.log('unable to fetch!')
    //     }

    //     console.log(user)
    // })
    const updatePromise = db.collection('users').updateOne({
        _id: new ObjectID("5ed711d1c2d0664570ec63a2")
    }, {
        $inc: {
            age: 1
        }
    })

    updatePromise.then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})
