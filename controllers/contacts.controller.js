const { contacts } = require('../models');
const { sendEmail } = require('../services/nodemailer');

const subject = 'Mensaje enviado correctamente';
const msg =
    'Muchas gracias por comunicarse con nosotros. A la brevedad responderemos su consulta';

const getContacts = async (req, res, next) => {
    try {
        const list = await contacts.findAll();
        if (!list) throw createError.NotFound('No hay contactos');

        return res.status(200).json(list);
    } catch (err) {
        next(err);
    }
};

const postContacts = async (req, res, next) => {
    const { name, email, phone, message } = req.body;
    try {
        const contact = await contacts.create({
            name,
            email,
            phone,
            message,
        });

        if (!contact) {
            throw createError.NotFound('No se pudo enviar el mensaje');
        } else {
            sendEmail(contact.email, subject, msg);
            sendEmail(
                'ongsomosmas.demo@gmail.com',
                contact.email,
                contact.name + ': ' + contact.message + '. ' + contact.phone
            );
            return res.status(200).json(contact);
        }
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getContacts,
    postContacts,
};
