class Item{
    constructor(name){
        this.name = name;
    }

    toString() {
        return `Item.${this.name}`;
    }
}

module.exports = Item;