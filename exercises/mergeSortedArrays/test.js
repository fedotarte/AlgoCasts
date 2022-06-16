const mergeSortedArrays = require('./index');

test('maxChar function exists', () => {
    let nums1 =[1,2,3,0,0,0];
    const m = 3;
    const nums2 = [4,5,6];
    const n = 3;
    mergeSortedArrays(nums1,m,nums2,n);
  expect(typeof maxChar).toEqual('function');
});

// test('Finds the most frequently used char', () => {
//   expect(maxChar('a')).toEqual('a');
//   expect(maxChar('abcdefghijklmnaaaaa')).toEqual('a');
// });
//
// test('Works with numbers in the string', () => {
//   expect(maxChar('ab1c1d1e1f1g1')).toEqual('1');
// });
