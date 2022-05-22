"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../index"));
var supertest_1 = __importDefault(require("supertest"));
var resize_1 = require("../utilities/resize");
var request = (0, supertest_1.default)(index_1.default);
it('total', function () {
    expect((0, resize_1.testJasmine)(1, 2)).toBeLessThan(10);
});
// describe('test the image end point response', ()=>{
//         it('get the api endpoint', async()=> {
//             const resposnse = await request.get('/api/images')
//             expect(resposnse.status).toBe(200)
//         })
//     })
// describe('test the image parameters', ()=>{
//     it('get the api endpoint', async()=> {
//         const resposnse = await request.get('http://localhost:3000/api/images?name=fjord.jpg&width=1200&height=500')
//             expect(resposnse.status).toBe(200)
//         })
//         it('get the api endpoint', async()=> {
//             const resposnse = await request.get('/api/images?name=ffjord.jpg&width=1200&height=500')
//                 expect(resposnse.status).toBe(400)
//                 expect(response.send).toEqual("no image with that name")
//             })
//     })
