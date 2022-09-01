const { Entries } = require('../models')

const getNewsById = async (req, res) => {
    try {
        return await Entries.findOne({where:{id:req.params.id, type:"news"}})
    } catch (err) {
        return res.status(404).json({ message: err.message })
    }
}

module.exports = {
    getNewsById
}