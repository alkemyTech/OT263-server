const { Contacts } = require("../models")

const getContacts = async (req, res) => {
    try {
        const contacts = await Contacts.findAll();
        return res.status(200).json(contacts)
    } catch (err) {
        return res.status(404).json(err);
    }
}

module.exports = {
    getContacts
}