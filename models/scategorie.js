const mongoose = require("mongoose")

const scategorieSchema=mongoose.Schema({
    nomscategorie:{type:String, required:true, unique:true},
    imagescategorie:{type:String, required:false},
    categorieID:{type:mongoose.Schema.Types.ObjectId,ref:'Categorie'}
})
module.exports=mongoose.model("Scategorie",scategorieSchema)