const express = require("express")
const Article = require("../models/article")

const router = express.Router()
router.get("/", async(req,res)=>{
    try {
        const art = await Article.find({},null,{sort:{"_id":-1}}).populate("scategorieID")
        res.status(200).json(art)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
})
router.post("/", async(req,res)=>{
const art1 = new Article(req.body)
try {
    await art1.save()
    res.status(200).json(art1)
} catch (error) {
    res.status(404).json({message:error.message})
}
})

router.delete("/:id", async(req,res)=>{
    try {
         
        await Article.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"Article supprimée"})
    } catch (error) {
        res.status(404).json({message:error.message})
    }
})
router.get("/:id", async(req,res)=>{
    try {
         
        const artId = await Article.findById(req.params.id).populate("scategorieID")
        res.status(200).json(artId)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
})
router.put("/:id", async(req,res)=>{
    try {
        const art1 = await Article.findByIdAndUpdate(
            req.params.id,
        {$set: req.body},
    {new : true})
        
        res.status(200).json(art1)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
})
module.exports = router