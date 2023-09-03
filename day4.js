console.log("----1.a----")
// 1.a print odd numbers in array

const numArray = [1,2,3,4,5,6,7,8,9];

// console.log(wholeArray);

(function (oddArray){
    for(let i =0; i<oddArray.length; i++ ){
        if(oddArray[i]%2 != 0){
            console.log(oddArray[i]);
        }
        
    }
})(numArray);
// -----------------------------------

console.log("----1.b----")

// 1.b convert all strings to title caps in string array

const stringArray = ['dora'];

const titleCap = function(str){
    console.log(str);
    var first = str[0].split("");
    var capTitle = first[0].toUpperCase();
    // var smallCap = first[1].toLowerCase();
    // var second = first[2].toLowerCase();
    // var third = first[3].toLowerCase();

    // var result = console.log(capTitle+smallCap+second+third);

    var smallCap = first.slice(1,4);

    for( var i =0; i<smallCap.length; i++){
        // console.log(smallCap[i].toLowerCase());
        console.log(smallCap[i]);
    
    }

}
titleCap(stringArray);
// ---------------------------------

console.log("------1.c------")

// 1.c Sum of all numbers in an array 

const numbers = [1,2,3,4,5,6,7,8,9];

const addArrayNumbers = function(add){
    // console.log(add);
    var sum = 0;

    for(let i =0; i<add.length; i++){
        console.log(sum = sum + add[i]);
        
    }

}

addArrayNumbers(numbers);
// ----------------------------

console.log("----1.d----");

// 1.d Return all the prime numbers in an array

//  Here array is taken from 1.c "[numbers]"

const primeNumber = function(prime){

    prime = prime.filter((numbers) =>{
        for(var i =2; i<= Math.sqrt(numbers); i++){
            if( numbers % i === 0) return false;

        }
        return true;

    });

    console.log(prime);

}
primeNumber(numbers);
// --------------------------

console.log("----1.e----");

// 1.e Return all the palindromes in an array

const palinArr = ["mom" , "rubin", "madam"] ;

const palinFunc = function(words){
    
    for(let i = 0; i<words.length; i++){
        const reversable = words[i].split("").reverse().join("");
        // compared with double equal because of datatype
        if(words[i] == reversable ) {
            console.log(words[i]);
        }else{
            console.log(false);
        }
    }
}
palinFunc(palinArr);
// -------------------------------

console.log("----1.f----");

// 1.f Return median of two sorted arrays of the same size

const points =[2,55,4,6];
const points2 = [99,5,3,6];
console.log(points.sort(function(a,b) {return a - b}));
console.log(points2.sort(function(a,b) {return a - b}));

// ---------------------------------

console.log("----1.g----");

// 1.g Remove duplicates from an array

(function(array){
    let duplicate = [...new Set(array)];
    console.log(duplicate);
   })([1,1,2,3,4])

//    --------------------------------


   console.log("----1.h----");

//    1.h Rotate an array by k times
let rotateArray = [1,2,3,4,5];

// const arr = [1, 3, 6, 5, 4];
// const rotatedArr = arr.map((e, i) => arr[arr.length-i-1])
// console.log(rotatedArr);



console.log("-----------------------------------------------");

console.log("----2.a----");

// 2.a print odd numbers in array using arrow func

//  const numArray = [1,2,3,4,5,6,7,8,9]; taken from 1.a 

const oddNum = (oddsArr) => {
    for(let i =0; i<oddsArr.length; i++ ){
        if(oddsArr[i]%2 != 0){
            console.log(oddsArr[i]);
        }    
    }
}
oddNum(numArray);
// -------------------------

console.log("----2.b----");

// 2.b Convert all the strings to title caps in a string array

// const stringArray = ['dora']; taken from 1.b

const arrowStringArray = (arrow) => {
    var firstArrow = arrow[0].split("");
    var capTitleArrow = firstArrow[0].toUpperCase();
    // var smallCap = first[1].toLowerCase();
    // var second = first[2].toLowerCase();
    // var third = first[3].toLowerCase();

    // var result = console.log(capTitle+smallCap+second+third);

    var smallCapArrow = firstArrow.slice(1,4);

    for( var i =0; i<smallCapArrow.length; i++){
        // console.log(smallCap[i].toLowerCase());
        console.log(smallCapArrow[i]);
    
    }
}

arrowStringArray(stringArray);
// --------------------------------


console.log("----2.c----");
// 2.c Sum of all numbers in an array
const addArrow = [1,5,6,3,2,7];

const addFuncArrow = (addarr) => {
    var arrowSum = 0;

    for(let i =0; i<addarr.length; i++){
        console.log(arrowSum = arrowSum + addarr[i]);
        
    }
}
addFuncArrow(addArrow);
// ------------------------------

console.log("----2.d----");
// 2.d Return all the prime numbers in an array
// Here array is taken from 1.c 

const primeArrowFunc = (primearr) => {
    primearr = primearr.filter((numbers) =>{
        for(var i =2; i<= Math.sqrt(numbers); i++){
            if( numbers % i === 0) return false;

        }
        return true;
    });
    console.log(primearr);
}
primeArrowFunc(numbers);
// ------------------------------

console.log("----2.e----");

// 2.e return all the palindromes in an array
//Here the array is from 1.e const palinArr = ["mom" , "rubin", "madam"] 

const palinArrow = (palin) =>{
    for(let i = 0; i<palin.length; i++){
        const reversable = palin[i].split("").reverse().join("");
        // compared with double equal because of datatype
        if(palin[i] == reversable ) {
            console.log(palin[i]);
        }else{
            console.log(false);
        }
    }
}
palinArrow(palinArr);