const jsondb = require("simple-json-db");
const db = new jsondb("../data/users.json");
const bcrypt = require("bcryptjs");

if (!db.has("next_id"))
    db.set("next_id",1);

exports.checkName = (username) => {
    const data = db.JSON()
    delete data["next_id"]

    for(let id in data){
        if(username == data[id].username)
            return false
    }
        
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

exports.checkPassword = (id, passwordToCheck) => {
    const passwordCorrect = db.get(id).hashedPassword

    return bcrypt.compareSync(passwordToCheck, passwordCorrect)
}

exports.userFromName = (username) => {

    const data = db.JSON();
    delete data["next_id"];

    for(let id in data)
        if(username == data[id].username)
            return data[id]
}
