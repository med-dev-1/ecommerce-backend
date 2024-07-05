const express = require("express")
const Categorie = require("../models/categorie")
//const req = require("express/lib/request")
const router = express.Router()
router.get("/", async(req,res)=>{
    try {
        const cat = await Categorie.find({},null,{sort:{"_id":-1}})
        res.status(200).json(cat)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
})
router.post("/", async(req,res)=>{
const cat1 = new Categorie(req.body)
try {
    await cat1.save()
    res.status(200).json(cat1)
} catch (error) {
    res.status(404).json({message:error.message})
}
})

router.delete("/:categorieId", async(req,res)=>{
    try {
         
        await Categorie.findByIdAndDelete(req.params.categorieId)
        res.status(200).json({message:"Categorie supprimée"})
    } catch (error) {
        res.status(404).json({message:error.message})
    }
})
router.get("/:categorieId", async(req,res)=>{
    try {
         
        const catId = await Categorie.findById(req.params.categorieId)
        res.status(200).json(catId)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
})
router.put("/:categorieId", async(req,res)=>{
    try {
        const cat1 = await Categorie.findByIdAndUpdate(
            req.params.categorieId,
        {$set: req.body},
    {new : true})
        
        res.status(200).json(cat1)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
})
module.exports = router