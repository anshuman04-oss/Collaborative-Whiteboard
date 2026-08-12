import { io } from "socket.io-client";

const token = localStorage.getItem("whiteboard_user_token");

// link to backend server: https://api-whiteboard-az.onrender.com
const socket = io("https://api-whiteboard-az.onrender.com", {
  extraHeaders: token ? { Authorization: `Bearer ${token}` } : {}, // Only send if token exists
});

export default socket;