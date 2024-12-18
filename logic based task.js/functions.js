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

//number 3 
//names of the developers
function findDeveloperNames(developers) {
  // Return an array containing all developer names
  return developers.map((dev) => dev.name);
}
const developerNames = developers.map((dev) => dev.name);
console.log(developerNames);

//total phones
function countTotalPhones(developers) {
  // Return the total number of phones across all developers
  return developers.reduce((acc, dev) => acc + dev.phones.length, 0);
}
const totalPhones = developers.reduce((acc, dev) => acc + dev.phones.length, 0);
console.log("number of phones:",totalPhones);


//incomplete Setup
function countIncompleteSetups(developers) {
  // Return the total number of incomplete computer setups
  return developers.reduce((acc, dev) => {
    return acc + dev.computerSetups.filter(
      (setup) =>
        setup.monitors === 0 ||
        setup.keyboards === 0 ||
        setup.mice === 0 ||
        setup.speakers === 0
    ).length;
  }, 0);
}

function findMostTrustedPhoneBrand(developers) {
  const phoneCounts = {};
  developers.forEach((dev) => {
    dev.phones.forEach((phone) => {
      phoneCounts[phone] = (phoneCounts[phone] || 0) + 1;
    });
  });
  const mostTrustedPhone = Object.entries(phoneCounts).reduce((prev, curr) => {
    return prev[1] > curr[1] ? prev : curr;
  }, [null, 0])[0];
  return mostTrustedPhone;
}

function findLeastTrustedPhoneBrand(developers) {
  const phoneCounts = {};
  developers.forEach((dev) => {
    dev.phones.forEach((phone) => {
      phoneCounts[phone] = (phoneCounts[phone] || 0) + 1;
    });
  });
  const leastTrustedPhone = Object.entries(phoneCounts).reduce((prev, curr) => {
    return prev[1] < curr[1] ? prev : curr;
  }, [null, Infinity])[0]; // Set initial count to Infinity
  return leastTrustedPhone;
}

function countPeopleWithoutPhone(developers) {
  // Return the number of developers who don't have any phones
  return developers.filter((dev) => dev.phones.length === 0).length;
}

function countPeopleWithoutLaptop(developers) {
  // Return the number of developers who don't have any laptops
  return developers.filter((dev) => dev.laptops.length === 0).length;
}

function countPeopleWithoutSetup(developers) {
  // Return the number of developers who don't have any computer setups
  return developers.filter((dev) => dev.computerSetups.length === 0).length;
}

function findDeveloperWithMostGadgets(developers) {
  const totalGadgets = developers.map((dev) => {
    let gadgetCount = dev.laptops.length + dev.phones.length;
    dev.computerSetups.forEach((setup) => {
      gadgetCount +=
        setup.monitors + setup.keyboards + setup.mice + setup.speakers;
    });
    return { name: dev.name, gadgets: gadgetCount };
  });
  const mostGadgets = totalGadgets.reduce((prev, curr) => (curr.gadgets > prev.gadgets ? curr : prev));
  return mostGadgets;
}

function findDeveloperWithMostPhones(developers) {
  const mostPhones = developers.reduce((prev, curr) => (curr.phones.length > prev.phones.length ? curr : prev));
  return mostPhones;
}

function findDeveloperWithMostSetups(developers) {
  const mostSetups = developers.reduce((prev, curr) => (curr.computerSetups.length > prev.computerSetups.length ? curr : prev));
  return mostSetups;
}

function findDeveloperWithMostMonitors(developers) {
  let totalMonitors = 0;
  let mostMonitorsDev = null;
  developers.forEach((dev) => {
    dev.computerSetups.forEach((setup) => {
      totalMonitors += setup.monitors;
    });
    if (totalMonitors > (mostMonitorsDev?.totalMonitors || 0)) {
      mostMonitorsDev = { name: dev.name, totalMonitors };
    }
    totalMonitors = 0; // Reset for next developer
  });
  return mostMonitorsDev;
}


