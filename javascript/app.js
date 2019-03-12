    // The below code fills in the first row of the table
    var movie = "Mr. Nobody";
    var queryURL = "https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi" + movie + "X-RapidAPI-Key" "73ae3fb7b9msh825c3218f23ad0dp10e50ejsn7e1841915505";

    unirest.get("https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi")
    .header("X-RapidAPI-Key", "73ae3fb7b9msh825c3218f23ad0dp10e50ejsn7e1841915505")
    .end(function (result) {
      console.log(result.status, result.headers, result.body);
    });
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      // Create a new table row element
      var tRow = $("<tr>");

      // Methods run on jQuery selectors return the selector they we run on
      // This is why we can create and save a reference to a td in the same statement we update its text
      var titleTd = $("<td>").text(response.Title);
      var yearTd = $("<td>").text(response.Year);
      var actorsTd = $("<td>").text(response.Actors);
        
      // Append the newly created table data to the table row
      tRow.append(titleTd, yearTd, actorsTd);
      // Append the table row to the table body
      $("tbody").append(tRow);
    });