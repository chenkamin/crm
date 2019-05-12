const express = require('express')
const router = express.Router()
const Todo = require('../model/Todo')



router.get('/todos', function(req,res){
    Todo.find({}, function(err,result){
        res.send(result)
    })
})

router.post('/todo', function(req,res){
    console.log(req.body)
    let t1 = new Todo(req.body)
    t1.save()
    res.end()
})


module.exports = router