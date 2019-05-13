const express = require('express')
const router = express.Router()
const Clients = require('../model/Clients')

router.get('/clients', function(req,res){
    Clients.find({}, function(err,result){
        res.send(result)
    })
})

router.post('/client', function(req,res){
    console.log(req.body)
    let t1 = new Clients(req.body)
    t1.save()
    res.end()
})

router.put('/client/:clientId', function(req,res){
    let client = req.params.clientId
    console.log(client) //THE ID
    console.log(req.body)
    
    Clients.findOneAndUpdate({_id: client}, req.body ,(err, result)=>  {
        
    } )
    
    res.send(req.body)
})


module.exports = router