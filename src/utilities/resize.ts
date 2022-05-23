import express from 'express';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const resize = async (
   req: express.Request,
   res: express.Response
) => {
   const imgName = req.query.name;
   const imgWidth = Number(req.query.width);
   const imgHeight = Number(req.query.height);
   const imagePath: string = path.normalize(
      __dirname +
         '../../../thumbnail/' +
         imgName +
         '-' +
         imgWidth +
         '-' +
         imgHeight +
         '.jpg'
   );

   const originaImage: string = path.normalize(
      __dirname + '../../../original-pic/' + imgName
   );

   // Error handling
   if (!fs.existsSync(originaImage)) {
      res.status(400).send('no image with that name');
      return;
   }
   if (imgWidth < 0 || imgHeight < 0) {
      res.status(400).send(
         'bad value for width or height, must be positive integer'
      );
      return;
   }
   if (!imgWidth || !imgHeight) {
      res.status(400).send('no value for width or height');
      return;
   }

   // processing
   if (fs.existsSync(imagePath)) {
      return res.status(200).sendFile(imagePath);
   } else {
      if (req.query.name != null) {
         resizeImage(
            imgName as string,
            imgWidth as unknown as number,
            imgHeight as unknown as number
         );

         await setTimeout(() => {
            return res.status(200).sendFile(imagePath);
         }, 500);
      }
   }
};

async function resizeImage(name: string, width: number, height: number) {
   try {
      await sharp('./original-pic/' + name)
         .resize({ width: width, height: height })
         .toFile('./thumbnail/' + name + '-' + width + '-' + height + '.jpg');
   } catch (error) {
      console.log(error);
   }
}

const testJasmine = (number1: number, number2: number) => {
   const total = number1 + number2;

   return total;
};

export { testJasmine };

export default resize;
