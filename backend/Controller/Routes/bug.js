
const route = require('express').Router();
const bugmodel = require('../../Model/bugModel')


route.post('/bugs', (req, res) => {
    bugmodel.create(req.body).then((bug)=>{
        if(!bug)return res.status(400).send("there was an error")
        res.send('created bug')
    })
    .catch((err)=>res.status(400).send(err))

})

route.put('/bugs', (req, res) => {
    const{_id, name, details, steps, version, priority, assigned, creator, time} = req.body
    bugmodel.findByIdAndUpdate(_id,{name,details,steps,version,priority,assigned,creator,time}).then((bug) =>{
        if(!bug) return res.status(400).send('no bugs')
        res.send('updated')
    })
    .catch((err)=>{
        if(err)res.status(400).send(err)
    })
})

    .post('/', (req, res) =>{
        bugmodel.findOne(req.body).then((bug)=>{
            if(!bug)return res.status(400).send('incorrect input')
            res.cookie('bug', bug)
            res.send(true)
        })
        .catch((err) =>{
            if(err) res.status(400).send(err)
        })
    })

    .get('/', (req,res) =>{
        bugmodel.find().then((bug)=>{
            if(!bug) return res.status(400).send('no bugs')
            res.send(bug)
        }) 
        .catch((err)=>{
            if(err) res.status(400).send(err)
        })
    })




module.exports = route;

