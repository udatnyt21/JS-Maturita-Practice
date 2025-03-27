const jsondb = require("simple-json-db");
const db = new jsondb("../data/users.json");
const bcrypt = require("bcryptjs");

if (!db.has("next_id"))
    db.set("next_id",1);

exports.checkName = (username) => {

}

exports.addUser = (username, password) => {

}

exports.checkPassword = (id, password) => {

}

exports.userFromName = (username) => {
    
}
