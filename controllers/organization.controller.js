const { Organization } = require('../models');

const createOrganization = async function (req, res, next) {
    const { name, image, phone, address, welcomeText } = req.body;
    try {
        const newOrganization = await Organization.create({
            name,
            image,
            phone,
            address,
            welcomeText,
        });
        
        return res.status(201).json(newOrganization);
    } catch (err) {
        next(err);
    }
};

const findOrganizationById = async function (req, res, next) {
    const id = req.params.id;
    try {
        const organizationData = await Organization.findByPk(id);
        if (!organizationData) {
            throw createError.NotFound('No hemos encontrado la organización');
        }

        return res.status(200).json(organizationData);
    } catch (err) {
        next(err);
    }
};

const updateOrganization = async (req, res, next) => {
    const { id } = req.params;
    try {
        const organization = await Organization.update(req.body, {
            where: { id },
        });
        if (!organization[0]) 
            throw createError.NotFound('No hemos encontrado la organización');

        return res.status(200).json(organization);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createOrganization,
    findOrganizationById,
    updateOrganization,
};
