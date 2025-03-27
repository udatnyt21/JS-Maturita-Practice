const jsondb = require("simple-json-db");
const db = new jsondb("../data/users.json");
const bcrypt = require("bcryptjs");

if (!db.has("next_id"))
    db.set("next_id",1);

exports.checkName = (username) => {
    const data = db.JSON()
    delete data["next_id"]

    for(let user in data)
        if(username == user.name)
            return false
    return true
}

exports.addUser = (username, password) => {
    const id = db.get("next_id");
    let hashedPassword = bcrypt.hashSync(password)

    db.set(id, {
        id,
        username,
        hashedPassword
    })
    db.set("next_id", id+1)
}

exports.checkPassword = (id, password) => {

}

exports.userFromName = (username) => {
}
