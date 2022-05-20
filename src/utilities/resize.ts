import express from 'express';
import fs from "fs"
import sharp from 'sharp';

const resize = (req: express.Request,res: express.Response,next: Function) => {
  var imgName = req.query.name;
  var imgWidth = Number(req.query.width);
  var imgHeight = Number(req.query.height);

  if(req.query.name != null) {
    const path = './thumbnail/' + imgName + '-' + imgWidth + '-' + imgHeight + '.jpg'
    if(!fs.existsSync(path)){
      resizeImage(
        imgName as string,
        imgWidth as unknown as number,
        imgHeight as unknown as number
      );
      res.json({"message" : "Thumbnail have been saved"})
    }
    else{
      res.json({"message" : "Thumbnail Already Exist"})
    }
  }
  
  next();
};

async function resizeImage(name: string, width: number, height: number) {
  try {
    await sharp('./original-pic/' + name)
      .resize({ width: width,height: height,})
      .toFile('./thumbnail/' + name + '-' + width + '-' + height + '.jpg');
  } catch (error) {
    console.log(error);
  }
}

export default resize;
