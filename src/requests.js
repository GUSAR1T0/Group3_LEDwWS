function mainPage(app) {
    app.get("/", (req, res) => {
        res.status(200)
        res.send("HELLO!!!")
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
