function rangeReading(rangeOfNumbers){
  let sortedNumber = sortArrayOfNumbers(rangeOfNumbers);
  let duplicateNumArr = findDuplicateNumber(sortedNumber);
  let uniqueNumberArr = getUniqueArray(sortedNumber);
  let countReadingsArrays = countReadings(uniqueNumberArr); 
  let finalReadingArrays;
  if(duplicateNumArr.length > 0){
    finalReadingArrays = findAndPushDuplicateNum(duplicateNumArr,countReadingsArrays);
  }else{
    finalReadingArrays =  countReadingsArrays;
  }
  console.log(finalReadingArrays);  
  return printRangeAndReadings(finalReadingArrays)
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
  return finalPrintArr;
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
  var real = [];
  var temp = [];  
  for (var i = 0; i < sortedArrNum.length; ++i)
  {
      if (i == 0)
      {
        temp.push(sortedArrNum[i]);
          continue;
      }      
      if (sortedArrNum[i - 1] != (sortedArrNum[i] - 1))
      {
          real.push(temp);
          temp = [];
      }
      temp.push(sortedArrNum[i]);
  }
  real.push(temp);
  return real;
}

function sortArrayOfNumbers(numArray){
  numArray.sort(function(num1, num2) {
    return num1 - num2;
  });
  return numArray;
}


module.exports = {sortArrayOfNumbers,countReadings,getUniqueArray,findDuplicateNumber,printRangeAndReadings,rangeReading,findAndPushDuplicateNum}