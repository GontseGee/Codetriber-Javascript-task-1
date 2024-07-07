let array = [3,56,23,78,23,78,100,123,148,193,190,-190,210,34,67,3,78,210,34,34,50,59,89,87,230,210,100,23,980];
//*ascending order
function sortAscending(data){
    return data.slice().sort((a,b)=> b-a);
}
let sortedLowesttoHighest = sortAscending(array);
console.log("sorted in Ascending:",sortedLowesttoHighest);

//*descending order
function sortDescending(data){
    return data.slice().sort((a,b) => b-a);
}
let sortedHighesttoLowest = sortDescending(array);
console.log("sorted in descending:", sortedHighesttoLowest);

//*unique array 
function removeDuplicates(data){
    return [ new set(data)];

}

let uniqueArray = removeDuplicates(array);
console.log("unique array:", uniqueArray);
//* total sum  of the array
function calculateSum(data){
    let total= 0;
    for (const num of data){
        total += num;
    }
    return total;
}

let sum = calculateSum(array);
console.log("sum:", sum);

//* elements less than or equal to 100
function filterLessThanOrEqualTo100 (data,value){
    return data.filter(m=num => num <= value);
}

let lessthanorequalto100= filterLessThanOrEqualTo100(array,100);
console.log("less than or equal to 100:", lessthanorequalto100);
//*elements grreater than 50
function filterGreaterThan50(data,value){
    return data.filter(num => num>value);
}
let greaterthan50=filterGreaterThan50(array,50);
console.log("greater than 50:",greaterthan50),

//*elements divisible by 2

function filterDivisibleBy2(data,divisor){
    return data.filter(num => num % divisor ===0);

}

let divisibleby2=filterDivisibleBy2(array,2)
console.log ("divisble by 2:", divisibleby2);


//* elements divisble by 3

function filterDivisibleBy3(data,divisor){
    return data.filter(num => num % divisor === 0);
}

let divisibleby3=filterDivisibleBy3(array,3)
console.log("divisible by 3:", divisibleby3);

//*not divisible by neither 3 nor 2

function filterneitherdivisibleBY2Nor3(data,divisor1,divisor2){
    return data.filter(num => num % divisor1 !== 0 && num % divisor2 !==0);
}

let neitherdivisibleBY2Nor3 = filterneitherdivisibleBY2Nor3(array,2,3);
console.log("neither divisible by 2 nor 3:", neitherdivisibleBY2Nor3);

//*number of elements
function countELements(data){
return data.length;
}

let numberOfElement = countELements(array);
console.log("number of Elements:",numberOfElement);

//*reversed array
function reverseList(data){
    return data.slice().reverse();
}
let reversedarray = reverseList(array);
console.log("reversed array:",reversedarray);



//functions for number 2

let Array  = [7, 10, "clentan", 13, 89, true, false, "jerry", "vukona", "Reabetswe", 600];

function filterByType(data,type){
    return data.filter(item => typeof item === type);
}

let numbers = filterByType(array, "number");
console.log("numbers:", numbers);

let strings = filterByType(array, "string");
console.log("strings:", strings);


function calculateSum(data){
    let total = 0;
    for (const num of data){
        total += num;
    }
    return total;
} 

let total = calculateSum(numbers);
console.log("sum:", total);

//*greeting including the string
function createGreeting(names){
    let salutation = "hello,";
    for (let x=0; x<names.length; x++){
        if (x===0){
            salutation +=names[x];
        }else if (x === names.length - 1){
            salutation += "and" + names [x];
        } else {
            salutation += ","+ names[x];
        }
    }
    salutation += ".";
    return salutation;
}

let names = filterByType(array, "string");
let greeting = createGreeting(names);
console.log("greeting:", salutation);


function filterNonString(data) {
    return data.filter(item => typeof item !== 'string');
  }

  let newArray = filterNonString(array);
console.log('newArray:',newArray);


