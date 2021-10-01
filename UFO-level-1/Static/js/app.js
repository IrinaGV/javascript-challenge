var tableData = data;



function newtable(data){

    var tbody = d3.select('tbody')
    data.forEach((ufo) => {
        var row = tbody.append("tr");

        Object.entries(ufo).forEach(([key, value]) => {
         var cell = row.append("td");
          cell.text(value);
        });

      });
}

newtable(tableData)


var filterDateButton = d3.select("#filter-btn");
var dateInput = d3.select("#datetime");


filterDateButton.on("click", function() {
    
   
    var dateToFilter = dateInput.property('value');
    var ufoFilteredDate = tableData.filter(
      ufo => ufo.datetime === (dateToFilter || ufo.datetime));
  
    
    var rows = d3.select('tbody').selectAll("tr")    
                 .data([])                
                 .exit()
                 .remove();
          

    newtable(ufoFilteredDate)

  });