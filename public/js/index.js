
const socket = io();

socket.emit("message", "hola desde el cliente"+Date());

socket.on("message", data =>{
    console.log(data);
    let products ="";
    data.forEach((datas) => {
       products += "<div></div><p>"+datas.title+"</p> <p> "+datas.description+"</p> <img class='image' src='"+datas.thumbnail+"'></img></div>";
     
        
    })
    


 
   $("#base").html(products);

})
