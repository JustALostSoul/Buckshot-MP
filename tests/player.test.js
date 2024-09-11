const CigarettePack = require("../classes/items/cigarette");
const Player = require("../classes/player");

test('Tests, if Player is created with Default Values', () =>  {
    let testPlayer = new Player();
    expect(testPlayer.health).toBe(4);
});

test('Tests, if Player is created with Custom Values', () => {
    let testPlayer = new Player(6);
    expect(testPlayer.health).toBe(6);
});

test('Tests, if Player can take damage', () => {
    let testPlayer = new Player();
    testPlayer.damage();
    expect(testPlayer.health).toBe(3);
    testPlayer.damage(2);
    expect(testPlayer.health).toBe(1);
});

test('Tests if Player can can get an Item Added and removed from Inventory', () => {
    let testPlayer = new Player();
    let testCig = new CigarettePack();

    expect(testPlayer.itemInventory).toHaveLength(0);
    testPlayer.addItem(testCig);
    expect(testPlayer.itemInventory).toContain(testCig);
    testPlayer.removeItem(testCig);
    expect(testPlayer.itemInventory).toHaveLength(0);
});