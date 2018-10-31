const gpio = require("onoff").Gpio
const dht = require('rpi-dht-sensor');

function read() {
    var pin27 = new dht.DHT22(27);
    var readout = pin27.read();
    console.log('Temperature: ' + readout.temperature.toFixed(2) + 'C, ' +
        'humidity: ' + readout.humidity.toFixed(2) + '%');
}

function mainPage(app) {
    var pin = new gpio(17, "out")
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
