var num ;
// split the number into  an array of  strings 
var digits = num.toString().split('');
// convert this array into a an array of digits
var realDigits = digits.map(Number);
console.log(realDigits);
// This line multiplies each vallue of the array to itself ie squares it 
let result = realDigits.map(x => x ** 2);
console.log(result);

// this is to sum the elements of the array 
let sum =0 ;
for(i=0; i<realDigits.length; i++){
    sum+= realDigits[i];
    console.log(sum);
}
// this is to concatenate the elements of the array 
let final  = result.join(""); 
console.log(final);
