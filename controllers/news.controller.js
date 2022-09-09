const { Entries } = require("../models")

const getNewsById = async (req, res) => {
    try {
        const entriesNews = await Entries.findOne({ where: { id: req.params.id, type: "news" } })
        if(!entriesNews) throw new Error("The entry is not a news")
        return res.status(200).json(entriesNews)
    } catch (err) {
        return res.status(404).json({ message: err.message })
    }
}

const createNews =async(req, res)=> {
    try {
        const { name, content, image, categoryId } = req.body;
        if(!name || !content || !image ){
            throw new Error('The entry has null values');
        }
        const DTO = {
            name : name, 
            content : content, 
            image : image, 
            categoryId : categoryId,
            type : 'news'
        };
        const newNews = await Entries.create(DTO);
        return res.json(newNews);
    } catch (err) {
        return res.status(400).json(err);
    }
}

module.exports = {
    getNewsById,
    createNews
}