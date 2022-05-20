import express from "express"
import resize from "../../utilities/resize";
import exphbs from "express-handlebars";



const images = express.Router();

images.get("/images", resize, (req,res) =>{
    res.send(`Here you can resize you image. Just put your queries in the address bar`)
    
})

export default images;