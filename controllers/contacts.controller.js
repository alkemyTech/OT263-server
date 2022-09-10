const {contacts} = require("../models");

const getContacts = async (req, res) => {
    try {
        const list = await contacts.findAll();
        if(!list) return res.status(404).json('No contacts found');
        return res.status(200).json(list);
    } catch (err) {
        return res.status(500).json({message: err.message});
    }
}

module.exports = {
    getContacts
}