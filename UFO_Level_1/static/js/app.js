// from data.js
var tableData = data;
console.log(tableData);

var tbody = d3.select("tbody");

tableData.forEach(function(ufo){
    console.log(ufo);
    var row =tbody.append("tr");

    Object.entries(ufo).forEach(function([key,value]){
        console.log(key,value);
        var cell =row.append("td");
        cell.text(value);
    });
});
// //Refactor to use Arrow Functions!
// tableData.forEach((ufo) => {
//     var row = tbody.append("tr");
//     Object.entries(ufo).forEach(([key, value]) => {
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });

//Use a date form in your HTML document and write JavaScript code that will listen for events 
//and search through the `date/time` column to find rows that match user input.

//Select the button
var button = d3.select("#filter-btn");

//Select the form
var form = d3.select("form");

//Create event handlers for clicking the button or pressing the enter key
button.on("click",runEnter);
// form.on("click", runEnter);

function runEnter() {
    //select the input element and get the raw html node
    var inputElement = d3.select(".form-control");

    //Get the value property of the input element
    var inputValue= inputElement.property("value").toLowerCase();

    var filteredData = tableData.filter(date => date.datetime === inputValue);

    // console.log(filteredData);
    //remove any data from tbody
    tbody.html("");

    filteredData.forEach(function(time){
    console.log(time);
    var row =tbody.append("tr");

    Object.entries(time).forEach(function([key,value]){
        console.log(key,value);
        var cell =row.append("td");
        cell.text(value);
    });
});
};



