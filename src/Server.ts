import Database from './Database';
import ws from 'ws'
const DB = new Database()
const WSPORT = 1337

class App {
    private wsServer: ws.Server | undefined = undefined
    constructor() {
        DB.setup()
        .then(this.setupWebsocketServer.bind(this))
    }
    private setupWebsocketServer() {
        let { wsServer = new ws.Server({ port: WSPORT }) } = this

        wsServer.on('error', e => console.log("DEBUG 1", e))
        wsServer.on('connection', client => this.connectionHandler(client))
    }

    private connectionHandler(client: ws) {
        console.log("Client Connection")
    }
}

new App()