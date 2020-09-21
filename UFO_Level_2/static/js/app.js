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
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// //Refactor to use Arrow Functions!
// tableData.forEach((ufo) => {
//     var row = tbody.append("tr");
//     Object.entries(ufo).forEach(([key, value]) => {
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//Select the button
var button = d3.select("#filter-btn");

//Select the form
var form = d3.select("form");

//Create event handlers for clicking the button or pressing the enter key
button.on("click",runEnter);
form.on("submit",runEnter);
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

function runEnter() {
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  
    //select the input element and get the raw html node
    var inputElement_date = d3.select("#datetime");

    //Get the value property of the input element based on data/time
    var inputValue= inputElement_date.property("value");
    console.log(inputValue);

    var filteredData=tableData;
    d3.event.preventDefault();

    if (inputValue!==""){

    filteredData = filteredData.filter(date => date.datetime === inputValue);
    }
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    //Get the value property of the input element based on city
    var inputElement_city = d3.select("#city");

    var inputValue= inputElement_city.property("value").toLowerCase();    

    if (inputValue!==""){

        filteredData = filteredData.filter(date => date.city === inputValue);
        }
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    //Get the value property of the input element based on city
    var inputElement_state = d3.select("#state");
    var inputValue= inputElement_state.property("value").toLowerCase();    

    if (inputValue!==""){

        filteredData = filteredData.filter(date => date.state === inputValue);
        }
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    //Get the value property of the input element based on country
    var inputElement_country = d3.select("#country");
    var inputValue= inputElement_country.property("value").toLowerCase();    

    if (inputValue!==""){

        filteredData = filteredData.filter(date => date.country === inputValue);
        }
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    //Get the value property of the input element based on shape
    var inputElement_shape = d3.select("#shape");
    var inputValue= inputElement_shape.property("value").toLowerCase();    

    if (inputValue!==""){

        filteredData = filteredData.filter(date => date.shape === inputValue);
        }

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

// form.on("submit",runEnter);