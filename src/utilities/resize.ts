import express from 'express';
import fs from 'fs';
import path, { dirname } from 'path';
import sharp from 'sharp';

const resize  =  async (req: express.Request, res: express.Response, next: Function ) => {
  const imgName = req.query.name;
  const imgWidth = Number(req.query.width);
  const imgHeight = Number(req.query.height);
  var imagePath: string = path.normalize(
    __dirname + '../../../thumbnail/' + imgName + '-' + imgWidth + '-' + imgHeight + '.jpg'
  );


  const originaImage: string = path.normalize(__dirname + '../../../original-pic/' + imgName);

  // Error handling
  if(!fs.existsSync(originaImage)){
    res.status(400).send("no image with that name")
    return
  }
  if(imgWidth < 0 || imgHeight < 0 ) {
    res.status(400).send("bad value for width or height, must be positive integer")
    return
  }
  if(!imgWidth || !imgHeight ) {
    res.status(400).send("no value for width or height")
    return
  }
  if(!isNaN(imgWidth) || !isNaN(imgHeight)) {
    res.status(400).send("width and height must be integer positive numbers")
    return
  }
  
  // processing
  if (fs.existsSync(imagePath)){
      console.log('TEST2: ' + imagePath);
      return res.sendFile(imagePath);
  }else {
    if (req.query.name != null){
      resizeImage(
                imgName as string,
                imgWidth as unknown as number,
                imgHeight as unknown as number
              );

      await setTimeout(() => {
        console.log('TEST1: ' + imagePath);
        return res.sendFile(imagePath);
      }, 500);
    }
  }
};




//   if (fs.existsSync(imagePath)){
//       console.log('TEST2: ' + imagePath);
//       return res.sendFile(imagePath);
//   }else {
//     if (req.query.name != null){
//       resizeImage(
//                 imgName as string,
//                 imgWidth as unknown as number,
//                 imgHeight as unknown as number
//               );

//       await setTimeout(() => {
//         console.log('TEST1: ' + imagePath);
//         return res.sendFile(imagePath);
//       }, 500);
//     }
//   }
// };


async function resizeImage(name: string, width: number, height: number) {
  try {
    await sharp('./original-pic/' + name)
      .resize({ width: width, height: height })
      .toFile('./thumbnail/' + name + '-' + width + '-' + height + '.jpg');
  } catch (error) {
    console.log(error);
  }
}

export default resize;
