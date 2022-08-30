const { News } = require('../models')

const getNewsById=async (req, res)=>{
    try{
        return res.status(200).json(await News.findByPK(req.body.id))
    }catch(err){
        return err
    }
}

module.exports ={
    getNewsById,
}