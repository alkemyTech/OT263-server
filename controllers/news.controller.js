const { Entries } = require('../models');
const createError = require('http-errors');

class NewsController {
    constructor() {}

    newsList = async (req, res, next) => {
        try {
            const list = await Entries.findAll({
                where: {
                    type: 'news',
                },
            });
            if (!list[0])
                throw createError.NotFound('No hay noticias para mostrar');

            return res.status(200).json(list);
        } catch (err) {
            next(err);
        }
    };
    
    getNewsById = async (req, res, next) => {
        const id = req.params.id;
        try {
            const entriesNews = await Entries.findOne({
                where: { id, type: 'news' },
            });
            if (!entriesNews)
                throw createError.NotFound('No hemos encontrado la noticia');

            return res.status(200).json(entriesNews);
        } catch (err) {
            next(err);
        }
    };

    deleteNews = async (req, res, next) => {
        const id = req.params.id;
        try {
            const entry = await Entries.destroy({ where: { id } });
            if (!entry)
                throw createError.NotFound('No hemos encontrado la noticia');

            return res.status(204).json();
        } catch (err) {
            next(err);
        }
    };

    createNews = async (req, res, next) => {
        const { name, content, image, categoryId } = req.body;
        const DTO = {
            name,
            content,
            image,
            categoryId,
            type: 'news',
        };
        try {
            await Entries.create(DTO);

            return res.status(201).json(DTO);
        } catch (err) {
            next(err);
        }
    };

    updateNews = async (req, res, next) => {
        const { id } = req.params;
        const newEntry = req.body;
        try {
            const [isUpdated] = await Entries.update(newEntry, {
                where: { id },
            });
            if (!isUpdated) throw createError.NotFound('Noticia no encontrada');

            return res.status(200).json(newEntry);
        } catch (err) {
            next(err);
        }
    };
}

module.exports = NewsController;
