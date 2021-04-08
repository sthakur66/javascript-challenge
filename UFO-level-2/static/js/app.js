
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

		// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

		// Select the input element and get the raw HTML node
		// Get the value property of the input element

		// datetime
		var dateElement = d3.select("#datetime");
		var dateValue = dateElement.property("value");

		// city
		var cityElement = d3.select("#city");
		var cityValue = cityElement.property("value");

		// state
		var stateElement = d3.select("#state");
		var stateValue = stateElement.property("value");
		console.log(stateValue);

		// country
		var countryElement = d3.select("#country");
		var countryValue = countryElement.property("value");

		// shape
		var shapeElement = d3.select("#shape");
		var shapeValue = shapeElement.property("value");
		
		var filteredData;

		// Use conditional statement to avoid filteredData getting overriden with null values
		if (dateValue !== "") {
			filteredData = tableData.filter(data => data.datetime === dateValue);
		} else if (cityValue !== "") {
			filteredData = tableData.filter(data => data.city === cityValue);
		} else if (stateValue !== "") {
			filteredData = tableData.filter(data => data.state === stateValue);
		} else if (countryValue !== "") {
			filteredData = tableData.filter(data => data.country === countryValue);
		} else if (shapeValue !== "") {
			filteredData = tableData.filter(data => data.shape === shapeValue);
		} else {
			filteredData = tableData;
		}


		// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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