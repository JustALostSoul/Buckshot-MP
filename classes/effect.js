class Effect {
    constructor(name){
        this.name = name;
    }

    static DoubleDamage = new Effect('DoubleDamage');

    toString() {
        return `Effect.${this.name}`;
    }
}

module.exports = Effect;