
import app from "../index";
import supertest from "supertest";
import {testJasmine} from "../utilities/resize";
import resize from "../utilities/resize";
import { Request, response } from "express";
import images from "../routes/api/images";
import server1 from "../routes/api/images";






const request1 = supertest(app)


app.use("/api" , images);

beforeAll(() => {
    const request = supertest(app)
    app.use("/api" , images);
});


it('total', () =>{
    expect(testJasmine(1,2)).toBeLessThan(10)
})

<<<<<<< HEAD

=======
it("test the empty image page", async()=>{

    const aa1 = "hi"
    const aa2 = 500;
    const aa3 = 500;

    const resposnse = await request.get('/api/images')
    expect(resposnse.body.message).toBe("no image with that name")
    
    // expect(request.get('/api/image').responseType).toBe(response.status(200))
})
>>>>>>> 5f559dec62c9b30110d8c6c3ea090b342c49efd0

it("test the empty image page", async()=>{

    const aa1 = "hi"
    const aa2 = 500;
    const aa3 = 500;

    
    expect(server1).toBe("no image with that name")
    
    // expect(request.get('/api/image').responseType).toBe(response.status(200))
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


