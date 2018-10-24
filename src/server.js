const Express = require("express")
const requests = require("./requests")

const viewsPath = require('path').join(__dirname, '../views')

class ServerHandler {
    constructor(port, host) {
        this.port = port
        this.host = host
        this.app = Express()
    }

    setup() {
        this.app.engine('html', require('ejs').renderFile)
        this.app.set('view engine', 'ejs')
        this.app.set('views', viewsPath)

        requests.all(this.app)

        return this
    }

    launch() {
        this.app.listen(this.port, this.host)
    }
}

class Server {
    launch(port, host) {
        new ServerHandler(port, host).setup().launch()
    }
}

module.exports = new Server()
