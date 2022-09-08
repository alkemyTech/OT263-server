const contacts = require("../models/contacts");

const getContacts = async (req, res) => {
    try {
        const [list] = await contacts.findByPk(1);
        if(!list) return res.status(404).json('No contacts found');
        return res.status(200).json(list);
    } catch (err) {
        return res.status(500).json(err);
    }
}

module.exports = {
    getContacts
}