import { Socket } from "socket.io";
const socket = io();

socket.emit("message", "hola desde el cliente");