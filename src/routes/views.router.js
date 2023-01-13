import  express from "express";
import utils from "../utils/products.js";


const router = express.Router();



router.get("/", (req, res) =>{
    const product = utils.products;

    const productse = {
        title :"hola",
        style : "styles.css",
        productos : product};
  
  res.render("product",productse);
})

export default router;