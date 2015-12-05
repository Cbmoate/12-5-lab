$(document).ready(function(){
  $(".btn-default").on("click", function(e){
    e.preventDefault();
    var userAddress = $("#userAddress").val();
    var googleApiUrl = "https://maps.googleapis.com/maps/api/geocode/json?";
    googleApiUrl += "key=AIzaSyADnEkRq-1ke4NWknv2pxRajx4f1vGlscg";
    googleApiUrl += "&address=" + userAddress;

    .ajax({
      type: "GET",
      url: "googleApiUrl",
      success: googleApiSuccess
    });
  });

  function googleApiSuccess(responce) {
    console.log("responce");
  }
  });
});