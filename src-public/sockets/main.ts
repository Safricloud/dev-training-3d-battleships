import { ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData } from './interfaces';
import { io, Socket } from "socket.io-client";

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();

export { socket };