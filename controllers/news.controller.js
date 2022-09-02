const { Entries } = require('../models');

const newsList = async function(req, res) {
    try {
        const list = await Entries.findAll({
            where:{
                type: 'news'
            },
            attributes: ['name', 'image', 'createdAt']
        })
        return res.status(200).json(list)

    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {
    newsList
}