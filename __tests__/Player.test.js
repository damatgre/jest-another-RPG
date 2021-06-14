const Player = require('../lib/Player');

//imports Potion() constructor into test
const Potion = require('../lib/Potion');

//connect to mock data
jest.mock('../lib/Potion');

console.log(new Potion())


test('creates a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));

    expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)]));
});

