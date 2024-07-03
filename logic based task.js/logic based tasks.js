let array = [3,56,23,78,23,78,100,123,148,193,190,-190,210,34,67,3,78,210,34,34,50,59,89,87,230,210,100,23,980];
let sortedLowesttoHighest = array.slice().sort(function(a,b){
    return a-b; });
console.log("sorted in Ascending:", sortedLowesttoHighest);

let sortedHighesttoLowest = array.slice().sort(function(a,b){
    return b-a; });
console.log("sorted in Descending:", sortedHighesttoLowest);

//* remove duplicated arrays.
let uniqueArray = [new Set(array)];
console.log("unique Array:", uniqueArray);

//*calculate the sum
let sum = 0

for (let x = 0; x < array.length; x++ ){
    sum += array[x];
}
console.log("sum:",sum);

//* a for loop to return elements lessthanorequal to 100

let lessthanorequalto100 = [];
for (let x=0; x < array.length; x++){

if (array[x] <= 100){
    lessthanorequalto100. push(array[x]);
}
}

console.log("less than or equal to 100:", lessthanorequalto100);

//*a for loop to return elements greater than 50
let greaterthan50=[];
for(let x= 0; x> array.length; x++){
if (array[x]>= 50){
    greaterthan50.push(array[x]);
}
}
console.log("greater than 50:",greaterthan50);


//* a for loop to return elements divisible by 2
let divisibleby2= [];
for (let x=0; x< array.length; x++){


 if (array[x]%2 === 0){
    divisibleby2.push(array[x]);
 }  
 }

 console.log("divisible by 2:", divisibleby2);


 let divisibleby3= [];
for (let x=0; x< array.length; x++){ 
 if (array[x]%3 === 0){
    divisibleby3.push(array[x]);
}
 }

 console.log("divisible by 3:", divisibleby3);


 let neitherdivisibleBY2Nor3 = [];
 for (let x=0; x<array.length; x++){
    if (array[x]% 2 !==0 && array[x]%3 !== 0){
        neitherdivisibleBY2Nor3.push(array[x]);
    }
 }
console.log("neither divisible by 2 nor 3:", neitherdivisibleBY2Nor3);


let numberOfElement = array.length;
console.log("number of Elements:", numberOfElement);

let reversedarray = array.slice().reverse();
console.log("reversed array:", reversedarray);





//* number 2

let Array= [7,10,"clentan",13,89,true,false,"jerry","vukona","Reabetswe",600]
let numbers =[];

for (let x=0; x< array.length; x++) {
    if (typeof array[x] === 'number'){
        numbers.push(array[x]);
    }
}
console.log("numbers", numbers);



let string=[];
let x=0;
while (x< array.length){
    if (typeof array[x] === 'string'){
        string.push(array[x]);
    }
    x++;  
}
console.log("strings:", string)


let total= 0;
let index=0;

do{
    if (typeof array[index] === 'number'){
        total += array[index];
    }
    index++;
}
while (index<array.length);
console.log("sum:", total);



//* using a for loop

let salutation="hello,";
let names=[];

for (let x=0; x< array.length; x++){
    if(typeof array [x] === "string"){
        names.push(array[x]);
    }
}
for (let z = 0; z < names.length; z++){
    if (z === 0){
        salutation +=names[z];
    }
    else if (z === names.length -1 ){
        salutation += "and"  +names[z];
    }
    else{
        salutation += "," +names[z];
    }
    }

    salutation  +=".";

    console.log(salutation);


    let newArray=[];

    for (let e= 0; e< array.length; e++) {
        if (typeof array[e] !== 'string') {
            newArray.push(array[e])
        }
    }
    console.log('newArray:',newArray);