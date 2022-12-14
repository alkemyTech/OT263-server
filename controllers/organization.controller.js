const { Organization } = require("../models");

const createOrganization = async function (req, res) {
    try {
        const { name, image, phone, address, welcomeText } = req.body;
        const newOrganization = await Organization.create({
            name: name,
            image: image,
            phone: phone,
            address: address,
            welcomeText: welcomeText
        })
        return res.status(200).json(newOrganization);
    } catch (err) {
        res.status(400).json(err);
    }
};

const findOrganizationById = async function (req, res) {
    const id = req.params.id;
    try {
        const organizationData = await Organization.findByPk(id)
        if(!organizationData) throw new Error("Organization not found", 404)
        const { name, image, phone, address, welcomeText, facebook, linkedin, instagram } = organizationData;
        res.status(200).json({
            name: name,
            image: image,
            phone: phone,
            address: address,
            welcomeText: welcomeText,
            facebook,
            linkedin,
            instagram
        })
    } catch (err) {
        return res.status(404).json({ message: err.message })
    }
}

const updateOrganization= async (req, res)=>{
    try{
        const organization= await Organization.update(req.body, {where:{id:req.params.id}})                
        if(organization[0])return res.status(200).json(req.body)
        throw new Error ("Organization not found", 404)
    }catch(err){
        return res.status(404).json({message:err.message})
    }
}

module.exports = {
    createOrganization,
    findOrganizationById,
    updateOrganization
};
