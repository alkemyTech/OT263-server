const { Member} = require('../models')
const Joi = require('joi')


const createMember = async (req, res) => {
    try {
        const { error, value} = validateMember(req.body)
        if(error){
            return res.status(400).json({message: error.details[0].message})
        }
        const member = await Member.create({
            name: value.name,
            image: value.image
        })
        return res.status(200).json(member);
    } catch (err) {
        return res.status(500).json({message: err.message});
    }
}


function validateMember(member) {
	const schema = Joi.object({
		name: Joi.string().required(),
        image: Joi.allow()
	})

	return schema.validate(member)
}

module.exports = { createMember}