function analogToDigitalConverter(readingInput,bitConverter,maxSensing){
    let minReading = 0;
    let maxReading = inputConverter(bitConverter);
    let inputInRange = checkInput(readingInput,minReading,maxReading);
    let output = calculateReports(inputInRange,maxSensing,maxReading);    
    return output;
}
function calculateReports(input,maxSensing,maxReading){
    return input.map((value)=> Math.round(maxSensing * value/maxReading));
}

function inputConverter(number){
    return Math.pow(2,number)
}

function checkInput(input,minVal,maxValue){
    let newInput = []
    for(num of input){
        let checkVal = (num < minVal || num > maxValue) ? "Out of Range" : num;       
        newInput.push(checkVal);
    }
    return newInput;
}

console.log(analogToDigitalConverter([100,5000],12,10));

module.exports = {
    analogToDigitalConverter,
    checkInput,
    inputConverter,
  };