const { contacts } = require("../models")
const schema = require("../util/contact.joi")

const postContacts = async (req, res) => {
  try {
    const value = await schema.validateAsync({ ...req.body });
  
    const contact = await contacts.create({
      name: value.name,
      email: value.email,
      phone: value.phone,
      message: value.message
    });

    return res.status(200).json(contact);
  } catch (err) {
    return res.status(400).json(err);
  }
}

module.exports = {
  postContacts
}