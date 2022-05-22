import app from "../index";
import supertest from "supertest";
import {testJasmine} from "../utilities/resize";
import resize from "../utilities/resize";
import { Request, response } from "express";
import images from "../routes/api/images";



const request = supertest(app)

it('total', () =>{
    expect(testJasmine(1,2)).toBeLessThan(10)
})

it("test", ()=>{
    expect(images.get("/images", resize, (req: Express.Request,res : Express.Response)))response.status.toBe(200)
})



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


