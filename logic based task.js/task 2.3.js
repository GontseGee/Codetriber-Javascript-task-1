const developers = [
    {
      name: "Vee",
      laptops: [
        "Dell"
      ],
      phones: [
        "Samsung",
        "Xiaomi"
      ],
      computerSetups: [
        {
          brand: "Lenovo",
          monitors: 1,
          keyboards: 1,
          mice: 1,
          speakers: 1
        }
      ]
    },
    {
      name: "Katlego",
      laptops: [
        "HP",
        "Samsung"
      ],
      phones: [
        "Apple",
        "Samsung",
        "Tecno",
        "Samsung"
      ],
      computerSetups: [
        {
          brand: "Lenovo",
          monitors: 2,
          keyboards: 1,
          mice: 1,
          speakers: 2
        }, 
        {
          brand: "Dell",
          monitors: 1,
          keyboards: 1,
          mice: 1,
          speakers: 1
        }
      ]
    },
    {
      name: "Rethabile",
      laptops: [
        "Samsung"
      ],
      phones: [
        "Samsung",
        "Huawei",
        "Poco"
      ],
      computerSetups: [
        {
          brand: "Asus",
          monitors: 1,
          keyboards: 1,
          mice: 1,
          speakers: 1
        }, 
        {
          brand: "Acer",
          monitors: 1,
          keyboards: 1,
          mice: 1,
          speakers: 2
        }
      ]
    },
    {
      name: "Gift",
      laptops: [],
      phones: [
        "Samsung"
      ],
      computerSetups: [
        {
          brand: "Acer",
          monitors: 3,
          keyboards: 1,
          mice: 1,
          speakers: 2
        }, 
        {
          brand: "HP",
          monitors: 2,
          keyboards: 1,
          mice: 1,
          speakers: 2
        }
      ]
    },
    {
      name: "Thokozile",
      laptops: [
        "Lenovo"
      ],
      phones: [
        "Apple"
      ],
      computerSetups: [
        {
          brand: "Dell",
          monitors: 1,
          keyboards: 1,
          mice: 1,
          speakers: 2
        }, 
        {
          brand: "Asus",
          monitors: 1,
          keyboards: 0,
          mice: 1,
          speakers: 1
        }, 
        {
          brand: "Dell",
          monitors: 1,
          keyboards: 1,
          mice: 1,
          speakers: 1
        }
      ]
    }
  ]
  
//array with names of the developers
const developerNames = developers.map((dev) => dev.name);
console.log(developerNames);

//number of phones
const totalPhones = developers.reduce((acc, dev) => acc + dev.phones.length, 0);
console.log(totalPhones);

// 3. Incomplete computer setups
const incompleteSetups = developers.reduce((acc, dev) => {
    return acc + dev.computerSetups.filter(
      (setup) =>
        setup.monitors === 0 ||
        setup.keyboards === 0 ||
        setup.mice === 0 ||
        setup.speakers === 0
    ).length;
  }, 0);
  console.log(incompleteSetups);

  // 4. Most trusted phone brand
const phoneCounts = {};
developers.forEach((dev) => {
  dev.phones.forEach((phone) => {
    phoneCounts[phone] = (phoneCounts[phone] || 0) + 1;
  });
});
const mostTrustedPhone = Object.entries(phoneCounts).reduce((prev, curr) => {
  return prev[1] > curr[1] ? prev : curr;
}, [null, 0])[0];
console.log(mostTrustedPhone); 

// 5. Least trusted phone brand (assuming any phone with a count > 0 is trusted)
const leastTrustedPhone = Object.entries(phoneCounts).reduce((prev, curr) => {
    return prev[1] < curr[1] ? prev : curr;
  }, [null, Infinity])[0]; // Set initial count to Infinity
  console.log(leastTrustedPhone);

  // 6. People without a phone
const noPhones = developers.filter((dev) => dev.phones.length === 0).length;
console.log(noPhones);

// 7. People without a laptop
const noLaptops = developers.filter((dev) => dev.laptops.length === 0).length;
console.log(noLaptops);

// 8. People without a computer setup
const noComputerSetup = developers.filter((dev) => dev.computerSetups.length === 0).length;
console.log(noComputerSetup);

// 9. Developer with the most gadgets
const totalGadgets = developers.map((dev) => {
    let gadgetCount = dev.laptops.length + dev.phones.length;
    dev.computerSetups.forEach((setup) => {
      gadgetCount +=
        setup.monitors + setup.keyboards + setup.mice + setup.speakers;
    });
    return { name: dev.name, gadgets: gadgetCount };
  });
  
  const mostGadgets = totalGadgets.reduce((prev, curr) => (curr.gadgets > prev.gadgets ? curr : prev));
  console.log(mostGadgets);

  // 10. Developer with the most phones
const mostPhones = developers.reduce((prev, curr) => (curr.phones.length > prev.phones.length ? curr : prev));
console.log(mostPhones);

// 11. Developer with the most computer setups
const mostSetups = developers.reduce((prev, curr) => (curr.computerSetups.length > prev.computerSetups.length ? curr : prev));
console.log(mostSetups);

// 12. Developer with the most monitors (combined)
let totalMonitors = 0;
let mostMonitorsDev = null;
developers.forEach((dev) => {
  dev.computerSetups.forEach((setup) => {
    totalMonitors += setup.monitors;
  });
  if (totalMonitors > (mostMonitorsDev?.totalMonitors || 0)) {
    mostMonitorsDev = { name: dev.name, totalMonitors };
  }
  totalMonitors = 0; // start from 0 for the next developer
});
console.log(mostMonitorsDev);

