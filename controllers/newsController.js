const { Entries } = require('../models');

const newsList = async function(req, res) {
    try {
        const list = await Entries.findAll({
            where:{
                type: 'news'
            },
            attributes: ['name', 'image', 'createdAt']
        })
        let response;
        if (list){
                response ={
                    meta: {
                        status: 200,
                        url: '/news'
                    },
                    data: list
                }
            }else{
                response ={
                    meta: {
                        status: 400,
                        error: "No news Found"
                    }
                }
            }
        res.json(response);

    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    newsList
}