// Scripts
// Toggle, Show/Hide Drawer
$('.toggle-drawer').click( function() {
  
  $('aside').toggleClass('drawer');
  
});


// Current lcoation
$('#city-1').on('click', function() {
     
    //load weather using your lat/long coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
      
      // Check lat/long coordinates
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      
      console.log(lat, long);
      
      // Send to SimpleWeather
      getWeather( lat + ',' + long ); 
    });
   
    var getWeather = function(location) {
    
   $.simpleWeather({
    location: location,
    unit: 'f',
    speed: 'mph',
    
    success: function(weather) {
      
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('#one .condition').text(weather.currently);
      $('#one .temp').text(weather.temp);
      
      $('#one .city').text(weather.city + weather.region);
      
      
        

    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look Outside.');
    }
  
  });
    
};
  
});




// Section 1 Weather
$('#city-2').on('click', function() {
  
  $.simpleWeather({
    location: 98802,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('#two .condition').text(weather.currently);
      $('#two .temp').text(weather.temp);
      $('#two .city').text(weather.city + weather.region);
      
      
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  }); 
});




