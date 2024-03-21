function SelectAll(table){
    return `SELECT * FROM ${table}`
}

let createFoodTable =   `
    CREATE TABLE IF NOT EXISTS food (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL, 
        description TEXT NOT NULL,
        price TEXT NOT NULL,
        course TEXT NOT NULL,
        alergens TEXT
    )
`
let getStarters = `SELECT * FROM food WHERE course="starter"`
let getMains = `SELECT * FROM food WHERE course="main"`
let getDesserts = `SELECT * FROM food WHERE course="Dessert"`

function UpdatePrice(item, newPrice){
    return `UPDATE food SET price = ${newPrice} WHERE name = ${item}`
}