import  express from "express";
import products from "../utils/products";
const router = express.Router();

router.get("/", (req, res) =>{
    const productse = products.products[products.getRandomInt(utils.products.length)]
  res.render("product",productse);
})

export default router;