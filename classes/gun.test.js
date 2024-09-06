const Gun = require("./gun");
const Player = require("./player");

test('Tests if Gun is loaded on creation with default random values', () => {
    let testGun = new Gun();

    //count the number of live Rounds in the testMagazine
    let count = 0;
    testGun.currentMagazine.Shells.forEach(Shell => {
        if(Shell.live){
            count++;
        }
    });

    expect(testGun.currentMagazine.Shells.length).toBeGreaterThan(0);
    expect(testGun.currentMagazine.Shells.length).toBeLessThanOrEqual(8);
    expect(count).toBeLessThanOrEqual(7);
});

test('Tests if Gun is loaded on creation with custom random values', () => {
    let testGun = new Gun(20, 10);

    //count the number of live Rounds in the testMagazine
    let count = 0;
    testGun.currentMagazine.Shells.forEach(Shell => {
        if(Shell.live){
            count++;
        }
    });

    expect(testGun.currentMagazine.Shells.length).toBeGreaterThan(0);
    expect(testGun.currentMagazine.Shells.length).toBeLessThanOrEqual(20);
    expect(count).toBeLessThanOrEqual(10);
});

test('Tests if the Gun can shoot at and harm a player', () => {
    let testGun = new Gun(1,1,true);
    let testPlayer = new Player();

    testGun.shoot(testPlayer);

    expect(testPlayer.health).toBe(3);
});