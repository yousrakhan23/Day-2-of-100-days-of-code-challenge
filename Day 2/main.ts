
// Q # 46:

// Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and 
// a method describe() that logs a sentence about the laptop.

// Explain & TIP: Objects can also contain functions (methods) that can perform actions using the 
// object's properties. This introduces method definition within objects.

let myLaptop = {
    make : "hp" , 
    model : "CORE i5 7th Generation" , 
    year : 2024 ,
    describe: function () {
        console.log(`This laptop is a ${this.year} ${this.make} ${this.model} model.`);

    },
};
myLaptop.describe();

// ...........................................................................................................................

// Q # 47:

//Advance array Destructing : given array of objects represting different laptops , each with properties make model and year 
//use array destructing to assign the first and second laptops to varriables. then log these variables.

let myLaptops = [
    {
        make: "Dell" ,
        model: "XPS 15" ,
        year: 2022 , 
    },
    {
        make: "Apple" ,
        model: "MacBook Pro" , 
        year: 2021 , 
    },
    {
        make: "hp" ,
        model: "Spectre x360" , 
        year: 2020 ,
    }
];
let [laptop1 , laptop2] = myLaptops ; 
console.log(laptop1);
console.log(laptop2); 

//.........................................................................................................................

// Q # 48:

// combining Arrays with spread Operator : suppose you are comparing prices of two different sets of laptops use the spread
// operators to combine theses arrays into a single array sorted in ascending order then log the result.

let pricesSet1 = [1200 , 1300 , 1400 ];
let pricesSet2 = [1000 , 1500 , 1600 ];
let combinedPrices = [...pricesSet1 , ...pricesSet2] .sort((a,b) => a-b);
console.log(combinedPrices);

//.......................................................................................................................

// Q # 49:

// Function with rest parameters...

function logHobbies (...hobbies : string[]){
    hobbies.forEach(hobby => {
        console.log(`I enjoy ${hobby}.`);
    });
}
logHobbies("coding" , "designing" , "marketing");

// ........................................................................................................................

// Q # 50:

// Multiline Template Literals:

let myIdealDay = `My ideal day would involve:
1: Waking up early and going for a gym.
2: Spending a few hours coding on a personal project.
3: Ending the day by reciting a Holy Quran. `;

console.log(myIdealDay);

//........................................................................................................................

