var tableData = data;

var tbody = d3.select('tbody')

function newtable(data){

    data.forEach((ufo) => {
        console.log(ufo);
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
         var cell = row.append("td");
          cell.text(value);
        });

      });
}

newtable(tableData);


var filterDateButton = d3.selectAll("#filter-btn");
var dateInput = d3.select("#datetime");

function eventHandler()
{
    d3.event.preventDefault();
    tbody.text("");
    var filtered_data = tableData.filter(data => data.datetime === dateInput.property("value"));
    console.log(filtered_data);
    newtable(filtered_data);
}
  
  filterDateButton.on("click", eventHandler);
  dateInput.on("change", eventHandler);


