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
  
  let array =["Vee","katlego","Gift","Thokozile"];
  console.log("names of the developers:", array);
  
  
  let Phones=0; //* used to keep track of the phone count
  for (let x=0; x < Phones.length; x++){ // initializes the counter to start at 0;
    totalphones += phonesArray[x]; // adds the current element to the phones variable
  }
  console.log("total phones:", Phones);
  
  
  //*this is the people with no computer setup 
  let incompleteSetups= 0;
  for (let x= 0; x< developers.length; x++) {
    let developer = developers[x];
    if (developer.computerSetups && Array.isArray(developer.computerSetups)) {
      for (let x = 0; x < developer.computerSetups.length; x++) {
        let setup = developer.computerSetups[j];
        if (setup.monitors === 0 || setup.keyboards === 0 || setup.mice === 0 || setup.speakers === 0) {
          incompleteSetups++;
        }
      }
    }
  }
  console.log("incomplete setups:", incompleteSetups);
  
  //* trusted phone brand
  let trustedphonebrand="";
  let maxcount=0; //*helps keep track of the calculations  of the trusted phone 
     
  for(let  brand in trustedphonebrand){
  if (trustedphonebrand[brand]> maxcount) {
  
  maxcount=trustedphonebrand[brand];
  trustedphonebrand=brand;
  }
  }
  
  console.log("most trusted phone brand:", trustedphonebrand);
  
  
  //*least trusted phone 
  let leasttrustedphonebrand=0;
  let count=0;
  
  for(let brand in leasttrustedphonebrand){
    if (leasttrustedphonebrand[brand]<count){
      count=leasttrustedphonebrand[brand];
      leasttrustedphonebrand=brand;
  
    }//* checks the brand parameter since we want to find out which brand is least trusted.
  }
  console.log("least trusted brand:", leasttrustedphonebrand);
  
  //* which developers have no phones
  let nophones= 0;
  for(let x=0; x<developers.length; x++){
    if (developers[x].phones.length ===0){
      nophones++;
    
    }
  }
  
  console.log("people without phones:",nophones);
  
  //* developers with no laptop
  
  let nolaptop = 0;
  for (let x=0; x<developers.length; x++){ 
    if (developers[x].laptops.length === 0){
      nolaptop++;
    }
  }
  
  console.log("people without laptops:", nolaptop);
  
  //* developer with most phones
  let Mostphones=0;
  let  devwithmostPhones="";
  
  for (let x=0; x<developers.length; x++){
    if (devwithmostPhones[Phones] < Mostphones ){
      Mostphones=devwithmostPhones[Phones];
      Mostphones=Phones;
    }
  }
  
  console.log ("developer with most phones:", devwithmostPhones.name);
  console.log ("computer setups they have: " ,devwithmostPhones.phones);
  
  
  //* developer with most computer setups
  let mostcomputerSetups= 0;
  let devwithmostcomputersetups=null;
  
  for (let x=0; x<developers.length; x++){
    if (devwithmostcomputersetups[mostcomputerSetups]< mostcomputerSetups){
  
    mostcomputerSetups=devwithmostcomputersetups[computerSetups];
    mostcomputerSetups= computerSetups;
    }
  }
  
  console.log ("developer with most computer setups:", devwithmostcomputersetups.name);
  console.log ("computer setups they have: " ,devwithmostcomputersetups. computerSetups);
  
  //*developer with most monitors
  let mostmonitors = 0;
  let devwithmostmonitors=null;
  
  for(let x=0; x<developers.length; x++){
    if(devwithmostmonitors[mostmonitors]< mostmonitors){
      mostmonitors=devwithmostmonitors[monitors];
      mostmonitors=monitors;
    }
  }
  console.log("developer with most monitor:", devwithmostmonitors.name);
  console.log ("monitorcount:",devwithmostmonitors.mostmonitors);
  
  