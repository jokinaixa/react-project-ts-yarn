const drinkAll = require('./drink');
const video = require('./video');

describe('pruebas jest', () => {
  // drinkAll
  test('drinks something lemon-flavoured', () => {
    const drink = jest.fn();
    drinkAll(drink, 'lemon');
    expect(drink).toHaveBeenCalled();
  });

  test('does not drink something octopus-flavoured', () => {
    const drink = jest.fn();
    drinkAll(drink, 'octopus');
    expect(drink).not.toHaveBeenCalled();
  });

  test('contenido del boton', () => {
    const ejemplo = { id: 'an id', title: 'a title', place: 'a place'};
    expect(ejemplo.id).toContain('an id');
  });

  // video
  test('plays video', () => {
    const spy = jest.spyOn(video, 'play');
    const isPlaying = video.play();
  
    expect(spy).toHaveBeenCalled();
    expect(isPlaying).toBe(true);
  
    spy.mockRestore();
  });
});
