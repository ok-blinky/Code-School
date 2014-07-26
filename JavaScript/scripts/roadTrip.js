// illustrating the similarity between the map() method and a for loop
var numbers = [1, 3, 2];
var res = numbers.map(function(arrayCell){
							return arrayCell*arrayCell;
						  }
);

var results = [];
var squared = function(){
	for(var i = 0; i < numbers.length; i++){
		results[i] = numbers[i]*numbers[i];
	};
	return results;
}

console.log(squared());
console.log(res);
console.log(squared);


/* passing a function expression into another expression to conserve program memory
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

console.log(greet) // how to comment?

closeTerminal(greet);

function closeTerminal(message){
	return message();
}
*/