const Gun = require("../classes/gun");
const HandSaw = require("../classes/items/handSaw");
const Player = require("../classes/player");
const Beer = require("../classes/items/beer");

test('Tests if the Hand Saw causes double damage', () => {
    let testGun = new Gun(1,1,true);
    let testPlayer = new Player();
    let testHandSaw = new HandSaw();

    testHandSaw.use(testGun);

    expect(testGun.damage).toBe(2);

    testGun.shoot(testPlayer);

    expect(testPlayer.health).toBe(2);
});

test('Tests if the Beer unloads one Shell from Gun', () => {
    let testGun = new Gun(2,2,true);
    let testBeer = new Beer();

    expect(testGun.currentMagazine.Shells.length).toBe(2);

    testBeer.use(testGun);

    expect(testGun.currentMagazine.Shells.length).toBe(1);
});