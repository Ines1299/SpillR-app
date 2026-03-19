import { io } from "socket.io-client";
import url from "../utils/constant.js";
const socket = io(url, {
    transports: ["websocket"],
    autoConnect: false,
});

export default socket;
