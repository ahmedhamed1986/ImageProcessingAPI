import app from '../index';
import supertest from 'supertest';
import resize from '../utilities/resize';
import { response } from 'express';

const request = supertest(app);
describe('test the image end point response', () => {
   it('get the api endpoint', async () => {
      const resposnse = await request.get('/api/images');
      expect(resposnse.status).toBe(200);
   });
});
