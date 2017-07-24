/**
 * Given some array:
 *    [
 *      {brand: 'Nike', name: 'AirMax'},
 *      {brand: 'Nike', name: 'Cortez'},
 *      {brand: 'Adidas', name: 'Ultra Boost'}
 *    ]
 *
 * This function will return a new array that groups by a specific
 * key and returns a count for each key:
 *
 *    [
 *      {brand: 'Nike', count: 2},
 *      {brand: 'Adidas', count: 1}
 *    ]
 * @param arr An array of objects
 * @param key A string of the object property
 */
import Api from '../api/index';

export function countByKey (arr, key) {
  var block = [];
    arr.filter((a) => {
      if (a.brand === key) {
        var shoe = a.brand + " - " + a.name;
        block.push(shoe);
        console.log(block);
      }
    });
  return block;
}

//Objects are not valid as a React child
// var block = [{
//   brand: '',
//   count: null
// }];
