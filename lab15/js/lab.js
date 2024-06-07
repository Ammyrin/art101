// index.js - purpose and description here
// Author: Alexander Chen (achen197@ucsc.edu)
// Date: June 6th

$(document).ready(function() {
  $('#activate').click(function() {
    $.ajax({
      url: "https://api.chucknorris.io/jokes/random",
      type: "GET",
      dataType: "json",
      success: function(data) {
        $('#output').html(data.value);
        console.log(data);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log("Error:", textStatus, errorThrown);
        $('#output').html("An Error has occurred");
      }
    });
  });
});