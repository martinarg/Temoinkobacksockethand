import express from "express";
import { Server } from "socket.io";
import { engine } from "express-handlebars";
import viewsRoute from "./routes/views.router.js";

import path from "path";
import ProductManager from "../src/utils/ProductManager.js";
const productManager= new ProductManager(
    path.resolve(process.cwd(), "public", "products.json")
  )

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

app.use(express.static("public"));

//iniciamos servidor
const httpServer = app.listen(PORT, () => {
    console.log(`Iniciado en http://localhost:${PORT}`);
  });
  

const socketServer = new Server(httpServer);

app.get("/", (req, res) => {
  res.send("Vamos Argentina");
});

  
app.use("/realtimeproducts", viewsRoute);

socketServer.on("connection", (socket)=>{
    console.log("hola perreke"+Date());
    socket.emit("product", );
    socket.on("message", (data)=>{
        console.log(data);
    })
});

app.post("/products", async (req, res) =>{
  try{
  const newProduct = req.body;
  const productb =   await productManager.addProduct(newProduct);
  res.send("enviado");
  console.log("agregado");
  const perro = "hola perro";
 

  const productbe = await productManager.getProducts();
  //res.send(productb);

  socketServer.emit("message", productbe);

} catch (err) {
  res.status(500).send(err.message);

  }
  });


  app.delete("/products/:id", async (req, res) => {
    try{
      const idProduct = req.params.id;
      await productManager.deleteProduct(idProduct);
      res.send("se borro el producto del id numero: "+idProduct);
      const productbe = await productManager.getProducts();
      socketServer.emit("message", productbe);

    } catch (err) {
    res.status(500).send(err.message);

    }
    });

    // uopdate product
    app.put("/products/:id", async (req, res) => {
      try{
      const idProduct = req.params.id;
      const productBody = req.body;
      let productb = await productManager.updateProduct(idProduct, productBody);
      res.send(productb);
      const productbe = await productManager.getProducts();
      socketServer.emit("message", productbe);
      }catch(err){
        res.status(404).send(err.message);
      }
  
    });





