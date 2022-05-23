import express from 'express';
import resize from '../../utilities/resize';
import exphbs from 'express-handlebars';
import path from 'path';

const images = express.Router();

<<<<<<< HEAD
images.get(
   '/images',
   resize,
   (req: express.Request, res: express.Response): void => {
      res.send(
         `Here you can resize you image. Just put your queries in the address bar`
      );
=======
const server1 = images.get("/images", resize, (req: express.Request,res : express.Response) : void =>{
    res.send(`Here you can resize you image. Just put your queries in the address bar`)
>>>>>>> 5f559dec62c9b30110d8c6c3ea090b342c49efd0

      // res.sendFile(path.normalize('C:/Users/ahmed/Desktop/ImageProcessingAP/thumbnail/fjord.jpg-400-602.jpg'))
   }
);

export default images;
