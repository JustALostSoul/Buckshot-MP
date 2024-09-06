const Player = require("./player");

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