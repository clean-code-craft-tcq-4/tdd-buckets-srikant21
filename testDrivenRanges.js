function rangeReading(rangeOfNumbers){
  sortArrayOfNumbers(rangeOfNumbers);
  let sortedNumber = sortArrayOfNumbers(rangeOfNumbers);
  let duplicateNumArr = findDuplicateNumber(sortedNumber);
  let uniqueNumberArr = getUniqueArray(sortedNumber);
  let countReadingsArrays = countReadings(uniqueNumberArr);
  // console.log(countReadingsArrays);
  let finalReadingArrays;
  if(duplicateNumArr.length > 0){
    finalReadingArrays = findAndPushDuplicateNum(duplicateNumArr,countReadingsArrays);
  }else{
    finalReadingArrays =  countReadingsArrays;
  }  
  printRangeAndReadings(finalReadingArrays)
}

function printRangeAndReadings(newArray){
  let finalPrintArr = [["Range","Readings"]];

  for(let i=0;i<newArray.length;i++){
    let firstVal = newArray[i][0];
    let rangeLength = newArray[i].length;
    let lastVal = newArray[i][rangeLength - 1];
    let output = [firstVal,'-',lastVal, rangeLength+1];
    finalPrintArr.push(output);
    output = [];
  }
  console.log(finalPrintArr);
}



function findAndPushDuplicateNum(duplicateNumArr,countReadingsArrays){
  for(num of duplicateNumArr){
    for(let i=0;i<countReadingsArrays.length;i++){
      if(countReadingsArrays[i].includes(num)){
        countReadingsArrays[i].push(num);
        sortArrayOfNumbers(countReadingsArrays[i]);
      }
    }
  }
  return countReadingsArrays;
}

function findDuplicateNumber(sortArray){
  return sortArray.filter((index, item, arr) => arr.indexOf(index) !== item) ;
}

function getUniqueArray(sortArray){
  return sortArray.filter((index, item, arr) => arr.indexOf(index) === item) ;
}

function countReadings(sortedArrNum){
  var r = [];
  var t = [];  
  for (var i = 0; i < sortedArrNum.length; ++i)
  {
      if (i == 0)
      {
          t.push(sortedArrNum[i]);
          continue;
      }      
      if (sortedArrNum[i - 1] != (sortedArrNum[i] - 1))
      {
          r.push(t);
          t = [];
      }
      t.push(sortedArrNum[i]);
  }
  r.push(t);
  return r;
}

function sortArrayOfNumbers(numArray){
  numArray.sort(function(a, b) {
    return a - b;
  });
  return numArray;
}

rangeReading([3, 5,3, 4, 10, 11, 12,10]);
// console.log(sortArray);