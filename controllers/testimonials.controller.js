const { Testimonials } =require ('../models')

const updateTestimonial=async (req, res)=>{    
    try{
        const testimonial= await Testimonials.update(req.body, {where:{id:req.params.id}})                
        if(testimonial[0])return res.status(200).json(req.body)
        throw new Error ("Testimonial not found", 404)
    }catch(err){
        return res.status(404).json({message:err.message})
    }
}

const deleteTestimonial=async (req,res)=>{
    try{
        const result= await Testimonials.destroy({where:{id:req.body.id}})
        console.log(result)
        return res.json("eliminado")
    }catch(err){
        return
    }
}

module.exports = {
    updateTestimonial
}