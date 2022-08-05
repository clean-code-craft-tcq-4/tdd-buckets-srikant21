const alerts = require('../testDrivenRanges');
const {expect} = require('chai');
const sinon = require('sinon');

describe('sortArrayOfNumbers', function() {  
 it('has function sortArrayOfNumbers', ()=>{
    expect(alerts.sortArrayOfNumbers([6,9,7])).to.exist;    
 })

 it('Check the sorting',()=>{
  let x= [6,9,7];
  let res = alerts.sortArrayOfNumbers(x);
  expect(res).to.be.deep.equal([6,7,9]);
 })

 it('check function rangeReading', ()=>{
  let input = [3, 5,3, 4, 10, 11, 12,10];
  let actual = alerts.rangeReading(input);
  let output = [ [ 'Range', 'Readings' ], [ 3, '-', 5, 5 ], [ 10, '-', 12, 5 ] ];
  expect(actual).to.deep.equal(output);    
})

it('check function printRangeAndReadings', ()=>{
  let input = [ [ 3, 3, 4, 5 ], [ 10, 10, 11, 12 ] ];
  let actual = alerts.rangeReading(input);
  console.log(actual);
  let output = [
    [ 'Range', 'Readings' ],
    [ [ 3, 3, 4, 5 ], '-', [ 3, 3, 4, 5 ], 2 ],       
    [ [ 10, 10, 11, 12 ], '-', [ 10, 10, 11, 12 ], 2 ]
  ];
  expect(actual).to.deep.equal(output);    
})


it('findAndPushDuplicateNum check output', ()=>{
  let duplicateNum = [ 3, 10 ];
  let finalArr = [ [ 3, 4, 5 ], [ 10, 11, 12 ] ];
  let output = [ [ 3, 3, 4, 5 ], [ 10, 10, 11, 12 ] ];
  let newActual = alerts.findAndPushDuplicateNum(duplicateNum,finalArr);
  expect(newActual).to.deep.equal(output);    
})
  
});
