/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((idx) =>  {
    if(idx.profession === "developer") {
      console.log(`id: ${idx.id}, Name: ${idx.name}, Age: ${idx.age}, Profession: ${idx.profession}`)
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((idx) => {
    if(idx.profession === "developer") {
      console.log(`id: ${idx.id}, Name: ${idx.name}, Age: ${idx.age}, Profession: ${idx.profession}`);
    }
  })
}

function addData() {
  //Write your code here, just console.log
  let temp = { id: 4, name: "Rajat", age: '24', profession: "Engineer"};
  arr.push(temp);
  arr.map((idx) => {
    console.log(idx.id, idx.name, idx.age, idx.profession)
  })
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((idx) => idx.profession !== "admin");
  arr.map((idx) => {
    console.log(idx.id, idx.name, idx.age, idx.profession)
  })
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr1 = [
    { id: 5, name: "neel", age: "18", profession: "developer" },
  { id: 6, name: "nitin", age: "20", profession: "developer" },
  { id: 7, name: "nachiket", age: "19", profession: "admin" },
  ]
  arr = arr.concat(arr1);
  arr.map((idx) => {
    console.log(idx.id, idx.name, idx.age, idx.profession)
  })
}
