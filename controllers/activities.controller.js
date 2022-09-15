const schema = require('../util/activitie.joi')
const { Activities } = require('../models')

const createActivity=async (req, res)=>{
    
    try{
        const value=await schema.validateAsync(req.body)
        return res.json(await Activities.create(value))
    }catch(err){
        return res.status(400).json({message:err.message})
    }
}

module.exports ={
    createActivity
}