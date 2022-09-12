const { Entries } = require("../models")
const createError = require('http-errors')

const getNewsById = async (req, res) => {
    try {
        const entriesNews = await Entries.findOne({ where: { id: req.params.id, type: "news" } })
        if(!entriesNews) throw new Error("The entry is not a news")
        return res.status(200).json(entriesNews)
    } catch (err) {
        return res.status(404).json({ message: err.message })
    }
}

const deleteNews = async (req, res) => {
  const id = req.params.id
  try {
    const entry = await Entries.destroy({ where: {id} })
    if(!entry) return res.status(404).json(createError.NotFound())
    return res.status(200).json("DELETED SUCCESS")
  } catch (err) {
    return res.status(500).json(createError.InternalServerError())
  }
}

module.exports = {
    getNewsById,
    deleteNews
}