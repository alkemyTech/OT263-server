const { Contacts } = require("../models")

const getContacts = async (req, res) => {
    try {
        const contacts = await Contacts.findAll();
        console.log(contacts)
        return res.status(200).json(contacts)
    } catch (err) {
        return res.status(500).json(err);
    }
}

module.exports = {
    getContacts
}