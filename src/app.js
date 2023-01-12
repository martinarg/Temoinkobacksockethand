import express from "express";



const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Vamos Argentina");
});
//con get obtenemos los productos con limite 
//don de poner /api/productos?limit=2




  


//iniciamos servidor
app.listen(port, () => {
  console.log(`Iniciado en http://localhost:${port}`);
});
