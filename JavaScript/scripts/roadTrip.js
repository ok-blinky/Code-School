// Objects: creating objects using Object Literal notation, accessing and modifying their properties
var lighthouseRock = {
  gateClosed: true,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1},
  // this next object is a function or method that will add ranger objects to the lighthouseRock location
  addRanger: function(name, skillz, station){
    this.numRangers++;
    this["ranger" + this.numRangers] = {name: name, skillz: skillz, station: station};},
  // now an object that enumerates over the owner object with a for-in loop
  listRangerNames: function(){
    for(p in this){
      if(this[p].name){
        console.log(this[p]);
      }
    }
  }
};
// create an array of lighthouse blinders with their names and power output
var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];
// add a property to lighthouseRock object and assign it the value of the blinders array 
lighthouseRock.weaponBulbs = superBlinders;
// create an alert message for the rangers by looping through the above object and sub-objects
function dontPanic(location){
  var assignmentList = "";
  for(var i = 1; i<=location.numRangers; i++){
    assignmentList += "\n" + location["ranger" + i]["name"] + ", man the " + 
    location["weaponBulbs"][location["ranger" + i]["station"] - 1][0] + "!";
  }    
  return alert("Avast, me hearties!\nThere be Pirates nearby! Stations!" + assignmentList);
}
dontPanic(lighthouseRock);

/* Understanding Closure and modifying bound values after closure
function warningMaker( obstacle ){
  var count = 0;
  var zones = [];
  return function ( number, location ) {
    var isThere = false;
    if(zones.length<1){
      zones.push([location, number]);
    } else {
      for(var i = 0; i<zones.length; i++){
        if(zones[i][0]==location){
          zones[i][1] += number;
          isThere = true;
        } else if(!isThere){
          zones.push([location, number]);
        }
      }
    }
    count++;
    var zoneList = "";
    for(var n=0; n<zones.length; n++){
        zoneList += "\n" + zones[n][0] + " (" + zones[n][1] + ")";}
    alert("Beware! There have been " + obstacle + " sightings in the Cove today!\n" + 
          number + " " + obstacle + "(s) spotted at the " + location + "!\n" +
          "This is Alert #" + count + " today for " + obstacle + " danger.\n" +
          "Current danger zones for " + obstacle + "(s) are:" + zoneList
         );
  };
}
var bergWarn = warningMaker("Iceberg");
bergWarn(5,"Ocean");
var batWarn = warningMaker("Bat");
batWarn(20,"Swamp");
batWarn(50,"Cave");
bergWarn(1,"Sea");
*/

/* Iterating over an array of functions with the shift() method to carry the result into the array's next function arriving at a final value
var puzzlers = [
  function ( a ) { return 8*a - 10; },
  function ( a ) { return (a-3) * (a-3) * (a-3); },
  function ( a ) { return a * a + 4; },
  function ( a ) { return a % 5; }
];
var start = 2;
var res = [];
var applyAndEmpty = function(num, puzzles){
  var loops = puzzles.length;
  for(var i = 0; i < loops; i++){
    num = puzzles.shift()(num);
    res.push(num);
  }
  return num;
};

console.log(puzzlers);
applyAndEmpty(start, puzzlers);
console.log(puzzlers);
console.log(res);
*/

/* Demonstrating how to return a function from a function and immediately invoke it
function adventureSelector ( userChoice ){
  if(userChoice == 1){
    return function() { alert("You've selected the Vines of Doom!\nHope you have a swingin' time.");};
  } else if(userChoice == 2){
    return function() { alert("Looks like you want the Lake of Despair!\nWatch out for the crocs. And I ain't talkin' about shoes.");};
  } else if(userChoice == 3){
    return function() { alert("The Caves of Catastrophe, really?\nAlright, well....nice knowing you.");};
  }
}
adventureSelector(2)();
*/

/* Creating single-line anonymous functions and storing them in an array
var puzz1 = function(num){return num*3-8;}; // returns 8 less than 3 times an input
var puzz2 = function(num){return (num+2)*(num+2)*(num+2);}; // returns the cube of the sum of an input and 2
var puzz3 = function(num){return num*num-9;}; // returns 9 less than the result of an input squared
var puzz4 = function(num){return num%4;}; // returns the remainder after an input is divided by 4
var puzzlers = [puzz1, puzz2, puzz3, puzz4];
var puzzles = puzzlers.map(function(puzz) { return " " + puzz(10);});
alert(puzzles);
*/

/* Illustrating the similarity between the map() method and a for loop
var numbers = [1, 3, 2];
var res = numbers.map(function(arrayCell) { return arrayCell*arrayCell;});

var results = [];
var squared = function(){
	for(var i = 0; i < numbers.length; i++){
		results[i] = numbers[i]*numbers[i];
	};
	return results;
}

console.log(squared());
console.log(res);
*/

/* Passing a function expression into another expression to conserve program memory
var greet;
var newCustomer = confirm("You're new here, right?");
if(newCustomer){
	greet = function(){
		return alert("Welcome, Newcomer!");
	};
} else {
	greet = function(){
		return alert("Sup?");
	};
}

console.log(greet)

closeTerminal(greet);

function closeTerminal(message){
	return message();
}
*/