const { Member } = require('../models');

const getMembers = async (req, res, next) => {
    try {
        const member = await Member.findAll();
        if (!member) throw createError.NotFound('No hay miembros');

        return res.status(200).json(member);
    } catch (error) {
        next(error);
    }
};

const createMember = async (req, res, next) => {
    const { name, image } = req.body;
    try {
        const member = await Member.create({
            name,
            image,
        });
        return res.status(201).json(member);
    } catch (err) {
        next(err);
    }
};

const updateMember = async (req, res, next) => {
    const { id } = req.params;
    const member = req.body;
    try {
        const [isUpdated] = await Member.update(member, { where: { id } });
        if (!isUpdated) throw createError.NotFound('El miembro no existe');

        return res.status(200).json(member);
    } catch (error) {
        next(error);
    }
};

const deleteMember = async (req, res, next) => {
    const { id } = req.params;
    try {
        const delMember = await Member.destroy({ where: { id } });
        if (!delMember) throw createError.NotFound('El miembro no existe');

        return res.status(204).send();
    } catch (error) {
        next(error);
    }
};

module.exports = {
    updateMember,
    getMembers,
    deleteMember,
    createMember,
};
