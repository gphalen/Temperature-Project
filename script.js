var getWeather = function(data) {

  $.getJSON('http://api.openweathermap.org/data/2.5/weather', {
    lat: data.lat,
    lon: data.lon,
    appid: "6e184d7217df24f0024e7c4ed26935a5"
  }, showWeather, 'jsonp');

};

var showWeather = function(data) {

  var funcs = [

    function one()

    {
      $('#owmData').empty().append('<p>Celsius : ' + Math.round((data.main.temp - 273.15)) + " " + "degrees" + '</p>');
    },

    function two() {

      $('#owmData').empty().append('<p>Fahrenheit : ' + Math.round(((data.main.temp * 9 / 5 - 459.67))) + "  " + "degrees" + '</p>');

    }

  ]
  $("#owmData2").text(data.weather[0].description)
  $("#owmData3").text("Location:" + " " + data.name)

  if (data.clouds.all > 50) {
    $('#demo').append(cloud);
  }

  if ((Math.round(((data.main.temp * 9 / 5) - 398.67))) > 50) {
    $('#demo').append(sun);
  }

  $("#btn").data('counter', 0).click(function() {

    var counter = $(this).data('counter');
    funcs[counter]();
    $(this).data('counter', counter < funcs.length - 1 ? ++counter : 0);

  })

}

$(document).ready(function() {

  $.getJSON('http://ip-api.com/json', getWeather)

})