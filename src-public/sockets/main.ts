import { ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData } from './interfaces';
import { io, Socket } from "../node_modules/socket.io-client/build/esm/index.js";

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();