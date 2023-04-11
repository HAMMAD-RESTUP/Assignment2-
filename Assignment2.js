// Question 1


// let global = 5; 
// function print (local) {
//     return function (global) { 
//         console.log(local + global)
//     }
// }

// let innerFunction = print(5);

// innerFunction(5);

// Question 2


// let arr = [12,4,56,78]

// function searchArray(arr, val) {
//   // Base case: if array is empty, value is not found
//   if (arr.length === 0) {
//     return false;
//   }

//   // Recursive case: check if first element of array is equal to value
//   if (arr[0] === val) {
//     return true;
//   }

//   // Recursive case: search remainder of array for value
//   return searchArray(arr, 3);
// }

// Question 3 

// function addParagraph(text) {
//     // Create a new <p> element
//     const paragraph = document.createElement('p');

//     // Set the text content of the new <p> element
//     paragraph.textContent = text;

//     // Get the <body> element of the HTML document
//     const body = document.querySelector('body');

//     // Append the new <p> element to the <body> element
//     body.appendChild(paragraph);
//   }

//   addParagraph('This is the text content of the new paragraph element!');



// Question 4
// function addListItem(text) {
//     // create a new list item element
//     var li = document.createElement("li");
//     // set the text content of the new list item
//     li.textContent = text;
//     // get a reference to the unordered list
//     var ul = document.getElementById("myList");
//     // append the new list item to the end of the unordered list
//     ul.appendChild(li);
//   }
//   addListItem("New list item");



// Question 5

// let myDiv = document.getElementById("myDiv");
// function changeBackgroundColor(element, color) {
//     element.style.backgroundColor = color;
// }
//   changeBackgroundColor(myDiv, "#0000");  

// Question 6 
// let prevstudents = localStorage.getItem("students");
// let students = prevstudents ? JSON.parse(prevstudents) : [];
// function studentData() {
//     let person = {
//         name: "Hammad",
//         age: 18

//     }
//     students.push(person);
//     console.log(students);
//     let stringify = JSON.stringify(students);
//     localStorage.setItem("students", stringify);
// };

// Question 7 

// function getObjectFromLocalStorage(key) {
//     let item = localStorage.getItem(key);
//     return JSON.parse(item);
// }
// console.log(myObj);


// Question 8

// function saveToLocalStorage(obj) {
//     // Loop through each property of the object
//     for (let key in obj) {
//       // Save the property to localStorage using the property name as the key and the property value as the value
//       localStorage.setItem(key, obj[key]);
//     }
    
//     // Create a new object to store the retrieved data
//     let retrievedObj = {};
    
//     // Loop through each key in localStorage
//     for (let key in localStorage) {
//       // Check if the key is in the original object
//       if (key in obj) {
//         // If the key is in the original object, add it to the retrieved object with the value from localStorage
//         retrievedObj[key] = localStorage.getItem(key);
//       }
//     }
    
//     // Return the retrieved object
//     return retrievedObj;
//   }

  
//   const myObj = { name: "Hammad", age: 18, city: "Karachi" };

// // Save the object to localStorage
// saveToLocalStorage(myObj);

// // Retrieve the object from localStorage and log it to the console
// let retrievedObj = saveToLocalStorage(myObj);
// console.log(retrievedObj);

