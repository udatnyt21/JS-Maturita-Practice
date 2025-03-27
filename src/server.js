const app = require("./app")

app.listen(process.env.port, () => {
    console.log("Server is running on" + String(process.env.port))
})