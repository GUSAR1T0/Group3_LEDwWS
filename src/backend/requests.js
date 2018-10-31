const gpio = require("onoff").Gpio

function mainPage(app) {
    var pin17 = new gpio(17, "out")

    app.get("/", (req, res) => {
        if (req.query["state"] === "on") {
            pin17.write(gpio.HIGH, (err, value) => { })
            console.log(`[${new Date().toString()}] LED ON`)
            res.send(req.body);
        } else if (req.query["state"] === "off") {
            pin17.write(gpio.LOW, (err, value) => { })
            console.log(`[${new Date().toString()}] LED OFF`)
            res.send(req.body);
        } else {
            res.render('main');
        }
    })
}

function autorefresh(app) {
    var pin17 = new gpio(17, "out")

    app.get("/refresh", (req, res) => {
        pin17.read((err, value) => {
            if (value == 1) {
                res.send({ "state": "on" });
            } else if (value == 0) {
                res.send({ "state": "off" });
            }
        })
    })
}

class Requests {
    constructor() {
        this.requests = [mainPage, autorefresh]
    }

    all(app) {
        this.requests.forEach(func => {
            func(app)
        })
    }
}

module.exports = new Requests()
