import app from '../index';
import supertest from 'supertest';
import { resizeImage } from '../utilities/resize';
import path from 'path';
import fs from 'fs';

const request = supertest(app);

describe('Test Image endpoint response', () => {
   const imgname1 = 'fjord.jpg';
   const imgwidth1 = 1200;
   const imgheight1 = 500;
   it('gets the api endpoint', async () => {
      const response = await request.get(
         `/api/images?name=${imgname1}&width=${imgwidth1}&height=${imgheight1}`
      );
      expect(response.status).toBe(200);
   });

   it('return error message for not existing file', async () => {
      const response = await request.get(
         `/api/images?name=noname.jpg&width=${imgwidth1}&height=${imgheight1}`
      );
      expect(response.text).toBe('no image with that name');
   });

   it('return error message for bad width input', async () => {
      const imgwidth1 = -1000;
      const response = await request.get(
         `/api/images?name=${imgname1}&width=${imgwidth1}&height=${imgheight1}`
      );
      expect(response.text).toBe(
         'bad value for width or height, must be positive integer'
      );
   });

   it('return error message if height not exist', async () => {
      const response = await request.get(
         `/api/images?name=${imgname1}&width=${imgwidth1}`
      );
      expect(response.text).toBe('no value for width or height');
   });
});


describe("test resize function", () => {
   it("test the output of the resize function" , async() => {
      const testImageName = "palmtunnel.jpg"
      const testImagePath = path.normalize(
         __dirname +
            '../../../thumbnail/' +
            testImageName +
            '-' +
            "500" +
            '-' +
            "500" +
            '.jpg'
      );
       await resizeImage(testImageName,500,500)
      expect(fs.existsSync(testImagePath)).toBeTrue

   })
})