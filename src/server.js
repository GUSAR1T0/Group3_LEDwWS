const Express = require("express")
const requests = require("./requests")

class ServerHandler {
    constructor(port, host) {
        this.port = port
        this.host = host
        this.app = Express()
    }

    init() {
        requests.all(this.app)
        return this
    }

    launch() {
        this.app.listen(this.port, this.host)
    }
}

class Server {
    launch(port, host) {
        new ServerHandler(port, host).init().launch()
    }
}

module.exports = new Server()
