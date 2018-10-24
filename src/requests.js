const gpio = require("onoff").Gpio
var pin = new gpio(17, "out")

function mainPage(app) {
    app.get("/", (req, res) => {
        if (req.query["state"] === "on") {
            pin.write(gpio.HIGH, (err, value) => { })
            console.log(`[${new Date().toString()}] LED ON`)
            res.send(req.body);
        } else if (req.query["state"] === "off") {
            pin.write(gpio.LOW, (err, value) => { })
            console.log(`[${new Date().toString()}] LED OFF`)
            res.send(req.body);
        } else {
            pin.write(gpio.LOW, (err, value) => { })            
            res.render("main")
        }
    })
}

class Requests {
    constructor() {
        this.requests = [mainPage]
    }

    all(app) {
        this.requests.forEach(func => {
            func(app)
        })
    }
}

module.exports = new Requests()
