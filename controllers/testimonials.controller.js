const { testimonials } =require ('../models')

const updateTestimonial=async (req, res)=>{    
    try{
        const testimonial= await testimonials.update(req.body, {where:{id:req.params.id}})                
        if(testimonial[0])return res.status(200).json(req.body)
        throw new Error ("Testimonial not found", 404)
    }catch(err){
        return res.status(404).json({message:err.message})
    }
}

const deleteTestimonial=async (req,res)=>{
    try{
        const result= await testimonials.destroy({where:{id:req.params.id}})
        if(!result)throw new Error("Elemento no encontrado", 404)
        return res.status(200).json({message:"Elemento eliminado con exito"})
    }catch(err){
        return res.status(404).json({message:err.message})
    }
}

module.exports = {
    updateTestimonial,
    deleteTestimonial
}