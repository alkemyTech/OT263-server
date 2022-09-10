const { Entries } = require('../models');

const newsList = async (req, res) => {
    try {
        const list = await Entries.findAll({
            where:{
                type: 'news'
            },
            attributes: ['name', 'image', 'createdAt']
        })
        if (!list) return res.status(404).json('No news found')
        
        return res.status(200).json(list)

    } catch (error) {
        return res.status(500).json({message: error.message})
}
}
const getNewsById = async (req, res) => {
    try {
        const entriesNews = await Entries.findOne({ where: { id: req.params.id, type: "news" } })
        if(!entriesNews) throw new Error("The entry is not a news")
        return res.status(200).json(entriesNews)
    } catch (err) {
        return res.status(404).json({ message: err.message })
    }
}

module.exports = {
    newsList,
    getNewsById
}