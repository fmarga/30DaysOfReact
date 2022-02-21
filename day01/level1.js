/* --------------- Array --------------- */

//Declare an empty array
const arr = [];

//Declare an array with more than 5 number of elements
const arr6 = ["first", "string", true, false, 8, 3.4];
//Find the length of your array
console.log(arr6.length);

//Get the first item, the middle item and the last item of the array
const firstItem = arr6[0];
const middle = Math.floor(arr6.length / 2);
const middleItem = arr6[middle];
const lastItem = arr6[arr.length - 1];

//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
//Print the array using console.log()
console.log(itCompanies);
//Print the number of companies in the array
console.log(itCompanies.length);
//Print the first company, middle and last company
const firstCompany = itCompanies[0];
const middleIt = Math.floor(itCompanies.length / 2);
const middleCompany = itCompanies[middleIt];
const lastCompany = itCompanies[itCompanies.length - 1];
//Print out each company
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}
//Change each company name to uppercase one by one and print them out
const novaArr = itCompanies.forEach((company) => {
  console.log(company.toUpperCase());
});
//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
const strCompanies = itCompanies.slice(0, itCompanies.length - 1).join(", ");
const lastCompanyStr = itCompanies.slice(itCompanies - 1)[0];
console.log(`${strCompanies} and ${lastCompanyStr} are big IT companies.`);
//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
itCompanies.includes("Facebook")
  ? console.log("Facebook")
  : console.log("Company is not found");
//Sort the array using sort() method
const sorted = itCompanies.sort();
//Reverse the array using reverse() method
const reversed = sorted.reverse();
//Slice out the first 3 companies from the array
const sliced = itCompanies.slice(0, 4);

/* --------------- Object --------------- */
//Create an empty object called dog
const dog = {};

//Print the the dog object on the console
console.log(dog);

//Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = "Bisteca";
dog.legs = 4;
dog.color = "black";
dog.age = "3";
dog.bark = () => {
  console.log("woof woof");
};

//Set new properties the dog object: breed, getDogInfo
dog.breed = "SRD";
dog.getDogInfo = function () {
  return `The dog's name is ${this.name}, it's ${this.age} years old, its color is ${this.color} and its breed is ${this.breed}`;
};
