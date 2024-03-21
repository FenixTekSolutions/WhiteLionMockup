class MenuItem {
    constructor(name, price, type, allergens){
        this.name = name;
        this.price = price;
        this.type = type;
        this.allergens = allergens;
    }
}

let menItems = []

let i;
// In reality, would be reading off of either a CSV or DB. Potentially populated using a private page.
i = new MenuItem("Garlic Bread","£3.50", "Starter", "Milk, Gluten");
console.log(i.name);
menItems.push(i);
i = new MenuItem("Mozarella Dippers", "£4.35", "Starter", "Milk, Gluten");
menItems.push(i);
i = new MenuItem("Mini Veg Spring Rolls", "£3.75", "Starter", "x");
menItems.push(i);
i = new MenuItem("Fish and Chips", "£13.95", "Main", "Fish, Gluten, Egg");
menItems.push(i);
i = new MenuItem("Cottage Pie", "£14.75", "Main", "Milk");
menItems.push(i);
i = new MenuItem("Chocolate Cheesecake","£6.50","Dessert","Milk" );
menItems.push(i);

console.log(menItems)

const body = document.body
let menu = document.createElement("table");
menu.id = "menu-table"

// General for demo purposes. Wo"uld adapt to make types of menu
// (e.g. add a "menuName" param, then use that to make a starter menu, a mains menu, etc.)
function CreateTableRows(items){
    let output = "" 

    output += "<table class='menu-table'>"
    output += `<tr>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Allergens</th>
                        </tr>`

    for(let i = 0; i < items.length; i++){
        output += `<tr>
                                <td>${items[i].name}</td>
                                <td>${items[i].price}</td>
                                <td>${items[i].allergens}</td>
                            </tr>
                            `
    }
    output += "</table>"

    return output
}


function PopulateMenu(){
    let menu = document.getElementById("menu-body")
    console.log(menu)
    menu.innerHTML = CreateTableRows(menItems);
}