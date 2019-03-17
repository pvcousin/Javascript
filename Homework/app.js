// from data.js
//var tableData = data;

//console.log(tableData);
//Select submit button
//var submit = d3.select("#submit");

// YOUR CODE HERE!
//var submit = d3.select("#date");

//submit.on("click", function() {
	//Prevent data from refreshing
	// d3.event.preventDefault();
	// Select input element
	//var inputElement = d3.select("#form-input");
	// Retreive the value of the input element
	//var inputValue = inputElement.property("value");

	//console.log(inputValue);

	//var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

	//console.log(filteredData);

	//tableData.forEach((filteredData) => {
		//var row = tbody.append("tr");
		//Object.entries(ufoData).forEach(([key, value]) => {
		//var cell = tbody.append("td");
		//cell.text(value);
		
		//});
	//});
//});

// from data.js
var tableData = data;

var tbody = d3.select("tbody");
// YOUR CODE HERE!
// var dateText = d3.select("#date");

tableData.forEach((ufoData) => {
  var row = tbody.append("tr");
  Object.entries(ufoData).forEach(([key, value]) => {
    var cell = tbody.append("td");
    cell.text(value);
  });
});
