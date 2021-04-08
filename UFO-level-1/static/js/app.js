
// Display all data from data object
	// from data.js
	var tableData = data;

	// Select the table body 
	var tbody = d3.select("tbody")

	// loop through data and append rows to the table body
	tableData.forEach(function(ufo){
		var row = tbody.append("tr");
		// use append method to insert table data for each row
		Object.entries(ufo).forEach(function([key,value]){
			//console.log(key, value)
			// use append to insert a cell for each value
			// use text to insert data to each cell
			var cell = row.append("td").text(value);
		});
	});


// Search for row in data object based on User input and display it by clearing all existing rows
	// Select the button
	var button = d3.select("#filter-btn");

	// Create event handlers for clicking the button or pressing the enter key
	button.on("click", runEnter);

	// Create the function to run for button click event
	function runEnter() {

	  // Prevent the page from reloading
	  d3.event.preventDefault();

	  // Select the input element and get the raw HTML node
	  var inputElement = d3.select("#datetime");

	  // Get the value property of the input element
	  var inputValue = inputElement.property("value");

	  // Print the value to the console
	  console.log(inputValue);
	  console.log(tableData);
	  
	  // Get the row based on input by using filter function from JS
	  var filteredData = tableData.filter(data => data.datetime === inputValue);
	
	  // Print the value to the console
	  console.log(filteredData);
	  
	  // select the table body to insert table rows and cells
	  var tbody = d3.select("tbody")
	   
	  // clean the table body to insert selected date values
	  tbody.html("");

	  // loop through data and append rows to the table body for user input
	  filteredData.forEach(function(ufo){
		  var row = tbody.append("tr");
		  // use append method to insert table data for each row
		  Object.entries(ufo).forEach(function([key,value]){		  
			//console.log(key, value)
			// use append to insert a cell for each value
			// use text to insert data to each cell
			 var cell = row.append("td").text(value);
			 });
		});
	};