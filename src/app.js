import express from "express";
import { Server } from "socket.io";
import { engine } from "express-handlebars";
import viewsRoute from "./routes/views.router.js";

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
    console.log("hola perreke");
    socket.emit("product", );
    socket.on("message", (data)=>{
        console.log(data);
    })
});



