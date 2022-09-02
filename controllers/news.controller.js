const db = require("../models")

const getNewsById = async (req, res) => {
    console.log(db.Entries)
    try {
        const entriesNews = await db.Entries.findOne({ where: { id: req.params.id, type: "news" } })
        if(!entriesNews) throw new Error("The entry is not a news")
        return res.status(200).json(entriesNews)
    } catch (err) {
        return res.status(404).json({ message: err.message })
    }
}

module.exports = {
    getNewsById
}