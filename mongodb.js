// CRUD operations - CREATE || READ || UPDATE || DELETE

const { MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error,client) => {
    if (error) {
        return console.log('Unable to connect Database')
    }  

    const db = client.db(databaseName)

    db.collection('tasks').updateMany({ 
        completed: false
    }, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

})  
  
    // db.collection('users').updateOne({ 
    //     _id: new ObjectID('5d1c681546bdda4b58a2366c')
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // Find Documents from task collection to fetch the last task using id ----------
    // -----------------------------------------------------------------------------------

    // db.collection('tasks').findOne({ _id: new ObjectID('5d1c5f1c7df90a5cbcbda33b')}, ( (error,task) => {
    //     console.log(task)
    // }))  
    
    // db.collection('tasks').find({ completed: true }).toArray ( (error,task) => {
    //     console.log(task)
    // })  
    
    // db.collection('tasks').find({ completed: true }).count( (error,task) => {
    //     console.log(task)
    // }) 
    
    // Find Documents from users collection whose Age = 34

    // db.collection('users').find({age:34}).toArray((error,users) => {
    //     console.log(users)
    // })  
    
    // db.collection('users').find({age:34}).count((error,users) => {
    //     console.log(users)
    // })  








// ---------------------------------------------------------------------------- //

    // db.collection('users').insertOne({
    //     name: 'Vikram',
    //     age: 32
    // }, (error,result) => {
    //     if(error) {
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)

    // })

    // db.collection('users').insertMany([{
    //     name: 'Jen',
    //     age: 28

    // }, {
    //     name: 'Shivam',
    //     age: 29
    // }], (error, result) => {
    //     if (error) {
    //         console.log('Unable to insert documents!')
    //     }

    //     console.log(result.ops)

    // })

//     db.collection('tasks').insertMany([{
//         description: 'Task1',
//         completed: true

//     }, {
//         description: 'Task2',
//         completed: true

//     },{
//         description: 'Task2',
//         completed: true
    
//     },
//     {
//         description: 'Task3',
//         completed: false
//     }
// ], (error, result) => {
//         if (error) {
//             console.log('Unable to insert documents!')
//         }

//         console.log(result.ops)

//     })

