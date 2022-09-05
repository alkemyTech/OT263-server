const { Testimonials } =require ('../models')

const updateTestimonial=async (req, res)=>{
    const { name, image, phone, address, welcomeText, deleteAt } = req.body
    try{
        const testimonial= await Testimonials.findByPk(req.params.id)
        if(testimonial){
            testimonial.name=name,
            testimonial.image=image,
            testimonial.phone=phone,
            testimonial.address=address,
            testimonial.welcomeText=welcomeText,
            testimonial.deleteAt=deleteAt
        }        
        return res.status(200).json(await testimonial.save())
    }catch(err){
        return res.status(404).json({message:err.message})
    }
}

module.exports = {
    updateTestimonial
}