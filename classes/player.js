class Player{
    constructor(health = 4){
        this.health = health;
        this.nextPlayer = false;
        this.itemInventory = [];
    }

    damage(damageValue = 1){
        this.health = this.health - damageValue;
    }

    addItem(item){
        this.itemInventory.push(item);
    }

    removeItem(item){
        this.itemInventory.splice(this.itemInventory.indexOf(item), 1);
    }
}

module.exports = Player;