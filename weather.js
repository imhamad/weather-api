$(document).ready(function(){
  
  var city = $("#city").val();
  if(city != ''){
    
    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + 
      "&APPID=c10bb3bd22f90d636baa00b1529ee5",
      type: "Get",
      dataType: "json";
      success: function(data){
        var widget = show(data);
      
      $("#show").html(widget);
       $("#city").val();
    }
    });
  }
  else{
    $("#error").html('Field cannot be empty');
  }
});

function show(data){
   return "<h2>Current Weather for " + data.name + ", " + data.sys.country + "</h2>"
            "<h3><strong>WeaTher</strong>: "+ data.weather[0].main +"</h3>" +
          "<h3><strong>Description</strong>: "+ data.weather[0].description +"</h3>" +
          "<h3><strong>Temperature</strong>: "+ data.main.temp +"</h3>" +
      "<h3><strong>Pressure</strong>: "+ data.main.pressure +"</h3>" +
      "<h3><strong>Humidity</strong>: "+ data.main.Humidity +"</h3>" +
      "<h3><strong>Minimum Temperature</strong>: "+ data.main.temp_min +"</h3>" +
      "<h3><strong>Maximum Temperature</strong>: "+ data.main.temp_max +"</h3>" +
      "<h3><strong>wind Speed</strong>: "+ data.main.wind_speed +"</h3>" +
      "<h3><strong>Wind degree</strong>: "+ data.main.wind_deg +"</h3>";
}