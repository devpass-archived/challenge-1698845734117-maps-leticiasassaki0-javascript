const myMap = require('./myMap');

const map = new myMap();

map.set('key1', 'value1');
map.set('key2', 'value2');

console.log('Size:', map.size());
console.log('Key1:', map.get('key1'));
console.log('Key2:', map.get('key2'));

map.delete('key1');

console.log('Size:', map.size());
console.log('Has Key2:', map.has('key2'));
console.log('Keys:', map.keys());
console.log('Values:', map.values());
console.log('Entries:', map.entries());