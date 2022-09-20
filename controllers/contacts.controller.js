const { contacts } = require("../models")
const schema = require("../util/contact.joi")
const {sendEmail} = require("../services/nodemailer")

const subject = "Mensaje enviado correctamente";
const msg = "Muchas gracias por comunicarse con nosotros. A la brevedad responderemos su consulta"

const getContacts = async (req, res) => {
    try {
        const list = await contacts.findAll();
        if(!list) return res.status(404).json('No contacts found');
        return res.status(200).json(list);
    } catch (err) {
        return res.status(500).json({message: err.message});
    }
}

const postContacts = async (req, res) => {
  try {
    const value = await schema.validateAsync({ ...req.body });
  
    const contact = await contacts.create({
      name: value.name,
      email: value.email,
      phone: value.phone,
      message: value.message
    });
    
    if(!contact) {
      return res.status(404).json(createError.NotFound())
    } else {
      sendEmail(contact.email, subject, msg)
      sendEmail(
        "ongsomosmas.demo@gmail.com", 
        contact.email, 
        contact.name + ": " + contact.message + ". " + contact.phone
      )
      return res.status(200).json(contact);
    }
  } catch (err) {
    return res.status(400).json(err);
  }
}

module.exports = {
    getContacts,
    postContacts
}