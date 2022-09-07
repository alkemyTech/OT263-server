const { Organization } = require("../models");

const createOrganization = async function (req, res) {
    try {
        const { name, image, phone, address, welcomeText } = req.body;
        const newOrganization = await Organization.create({
            name: name,
            image: image,
            phone: phone,
            address: address,
            welcomeText: welcomeText,
        });
        return res.json(newOrganization);
    } catch (err) {
        res.status(400).json(err);
    }
};

const findOrganizationById = async function (req, res) {
    const id = req.params.id;
    const organizationData = await Organization.findByPk(id);
    const { name, image, phone, address, welcomeText } = organizationData;
    res.json({
        name: name,
        image: image,
        phone: phone,
        address: address,
        welcomeText: welcomeText,
    });
};

module.exports = {
    createOrganization,
    findOrganizationById,
};
