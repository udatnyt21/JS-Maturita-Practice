const app = require("./app")

app.listen(8080, () => {
    console.log("Server is running on" + String(process.env.port))
})