// var greet = "Hi welcome to my website"
// alert(greet);

// var eror = "Error! Please enter a valid password"
// alert(eror);

alert("Hi welcome to my website");
alert("Error! Please enter a valid password");
alert("Welcome to JS Land...\nHappy Coding!");
alert("Welcome to JS Land...");
alert("Happy Coding!");

var myName = "Your Full Name";

var message;
message = "Hello World";
alert(message);

var studentName = "Jhone Doe";
var studentAge = "15 years old";
var studentCourse = "Certified Mobile Application Development";

alert(studentName);
alert(studentAge);
alert(studentCourse);

document.write("Yah! I can write HTML content through JavaScript");

var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";

alert(design);
document.write(design);

var age = 15;    // You can change this to your real age
alert("I am " + age + " years old");


var visitCount = localStorage.getItem("visitCount");

// If no value exists, set it to 0
if (visitCount === null) {
    visitCount = 0;
}

// Increase visits
visitCount++;

// Save updated value
localStorage.setItem("visitCount", visitCount);

// Show message
alert("You have visited this site " + visitCount + " times");
document.write("You have visited this site " + visitCount + " times");

