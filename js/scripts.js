// Scripts
// Toggle, Show/Hide Drawer
$('.toggle-drawer').click( function() {
  
  $('aside').toggleClass('drawer');
  
});

// Section 1 Weather
$('#city-1').on('click', function() {
  
  $.simpleWeather({
    location: 99004,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('#one .temp').text(weather.temp);
      $('#one .city').text(weather.city);
      $('#one .state').text(weather.state);
      
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  }); 
  
});




// Section 2 Weather
$('#city-2').on('click', function() {
  
  $.simpleWeather({
    location: 98105,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('#two .temp').text(weather.temp);
      $('#two .city').text(weather.city);
      $('#two .state').text(weather.state);
        
    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  }); 
  
});



// Section 3 Weather
$('#city-3').on('click', function() {
     
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
    success: function(weather) {
      
      // Entire weather object
      console.log(weather);
      
      // Display Data
      $('#three .temp').text(weather.temp);
      $('#three .city').text(weather.city);
      $('#three .state').text(weather.state);
        

    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look Outside.');
    }
  
  });
    
};
  
});