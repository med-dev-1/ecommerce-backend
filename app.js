const categorieRouter = require("./routes/categorie.route")
const scategorieRouter = require("./routes/scategorie.route")
const articleRouter = require("./routes/article.route")
const express = require("express");
const dotenv = require("dotenv");
const mogoose = require("mongoose");
const cors = require("cors");
const app = express();
dotenv.config();
app.use(cors({
    origin:"*"
}))
app.use(express.json());
app.get("/",(req, res) => {
    res.send("Bienvenue dans notre site web")
})


// connexion à la base de donnée
mogoose.connect(process.env.DATABASECLOUD,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(() =>{console.log("Connexion à la base de donnée reussite")
})
.catch(err => {
    console.log("Impossible de se connecter")
    process.exit();
})

app.use("/api/categories",categorieRouter)
app.use("/api/scategories",scategorieRouter)
app.use("/api/article",articleRouter)
app.listen(process.env.PORT)
console.log("Application run at port " + process.env.PORT)
module.exports=app
