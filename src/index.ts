import express, { Router } from "express"
import images from "./routes/api/images";
import exphbs from "express-handlebars";

const app = express();
const port = 3000;



app.use("/api" , images);

app.get("/api", (req: express.Request,res: express.Response) : void=>{
  res.send("Hi in the API page")
  // res.sendFile(__dirname +   "/test.jpg")
  
})


app.listen(port, () =>{
  console.log(`server started at http://localhost:${port}`)
})

export default app;