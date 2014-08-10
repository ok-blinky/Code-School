// create a SpeedTester class constructor to measure performance of a function over many code repetitions
function SpeedTester(testImplement, testParams, repetitions){
	// the function you wish to test
	this.testImplement = testImplement;
	// the parameters for the above function
	this.testParamas = testParams;
	// if no repetitions are specified default to 10k
	this.repetitions = repetitions || 10000;
	this.average = 0;
}

SpeedTester.prototype = {
	startTest: function(){
		var beginTime, endTime, totalTime = 0;
		for(var i = 0, x = this.repetitions; i<x; i++){
			beginTime = +new Date();
			this.testImplement(this.testParams);
			endTime = +new Date();
			totalTime += endTime - beginTime;
		}
		this.average = totalTime / this.repetitions;
		return console.log("Average execution time across " +
						   this.repetitions + " executions was: " +
						   this.average + "ms.");
	}
}
// Notes:
// a function requiring multiple parameters will need to be setup to accept them as an array
// create a SpeedTester object and call the startTest() method to measure its performance