const myMap = require('./myMap');

test('Set and get value from myMap', () => {
  const map = new myMap();
  map.set('key1', 'value1');
  map.set('key2', 'value2');
  expect(map.get('key1')).toBe('value1');
  expect(map.get('key2')).toBe('value2');
});

test('Delete value from myMap', () => {
  const map = new myMap();
  map.set('key1', 'value1');
  expect(map.delete('key1')).toBe(true);
  expect(map.delete('key1')).toBe(false);
});

test('Get size of myMap', () => {
  const map = new myMap();
  map.set('key1', 'value1');
  map.set('key2', 'value2');
  expect(map.size()).toBe(2);
  map.delete('key2');
  expect(map.size()).toBe(1);
});

test('Check if myMap has a key', () => {
  const map = new myMap();
  map.set('key1', 'value1');
  expect(map.has('key1')).toBe(true);
  expect(map.has('key2')).toBe(false);
});

test('Get keys from myMap', () => {
  const map = new myMap();
  map.set('key1', 'value1');
  map.set('key2', 'value2');
  expect(map.keys()).toEqual(['key1', 'key2']);
});

test('Get values from myMap', () => {
  const map = new myMap();
  map.set('key1', 'value1');
  map.set('key2', 'value2');
  expect(map.values()).toEqual(['value1', 'value2']);
});

test('Get entries from myMap', () => {
  const map = new myMap();
  map.set('key1', 'value1');
  map.set('key2', 'value2');
  expect(map.entries()).toEqual([['key1', 'value1'], ['key2', 'value2']]);
});