import  express from "express";
import { Server } from "socket.io";

import path from "path";
import ProductManager from "../utils/ProductManager.js";
const productManager= new ProductManager(
    path.resolve(process.cwd(), "public", "products.json")
  )

const router = express.Router();





router.get("/", async (req, res) =>{
  try {

  const productb = await productManager.getProducts();
  //res.send(productb);

  const productse = {
    title :"hola",
    style : "styles.css",
    productos : productb};

  res.render("product",productse);
  
  } catch (err) {
  res.status(500).send(err.message);

  }
  });






export default router;