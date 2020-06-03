// CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    
    // db.collection('users').insertOne({
    //     name: 'Prasoon',
    //     age: 19
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert User')
    //     }

    //     console.log(result.ops)
    // })

    db.collection('users').insertMany([
        {
            name: 'Guggu',
            age: 19
        }
        , {
            name: 'Guggi',
            age: '17'
        }], (error, result) => {
            if(error) {
                return console.log('Unable to insert1')
            }

            console.log(result.ops)
        })
})
