$(document).ready(function(){
  $.ajax(){
    type: "GET",
    url: "https://api.wheretheiss.at/v1/satellites/25544/positions?timestamps=1436029892,1436029902&units=miles"
    success:(locationData);
      console.log(locationData)
  }
})