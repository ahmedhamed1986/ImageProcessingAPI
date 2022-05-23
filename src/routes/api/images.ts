import express from 'express';
import resize from '../../utilities/resize';
import exphbs from 'express-handlebars';
import path from 'path';

const images = express.Router();

const server1 = images.get("/images", resize, (req: express.Request,res : express.Response) : void =>{
    res.send(`Here you can resize you image. Just put your queries in the address bar`)

      // res.sendFile(path.normalize('C:/Users/ahmed/Desktop/ImageProcessingAP/thumbnail/fjord.jpg-400-602.jpg'))
   }
);

export default images;
