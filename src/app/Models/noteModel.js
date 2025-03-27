const a = require("simple-json-db")
const db = new a("../data/notes.json")


if(!db.has("next_id"))
    db.set("next_id", 1);

exports.add = (owner, title, content, isImportant, date, time) => {
    const id = db.get("next_id");

    if(isImportant == "on")
        isImportant = true
    else
        isImportant = false;

    db.set(id, {
        id, owner, title, content, isImportant, date, time
    });
    db.set("next_id", id+1);
}

exports.getNotes = (id) => {
    const data = db.JSON();
    delete data["next_id"];
    
    let userNotes= [];

    for(let i in data)
        if(data[i].owner == id)
            userNotes.push(data[i])
    return userNotes
}