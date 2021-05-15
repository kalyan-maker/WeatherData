
var request = new XMLHttpRequest();

request.open ('GET',"https://restcountries.eu/rest/v2/all",true);

request.send();

request.onload = function(){
  var data = JSON.parse(this.response)
  for(i in data){
    var name = data[i].name;
    var lang = data[i].latlng
    weatherData(name, ...lang)
    //console.log(name + " : "+ lang)
  }
}

var weatherData = function(name, lat, lng) {
  //console.log(name+ " "+lat+" " +lng)
  var request = new XMLHttpRequest();
  var url = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lng+'&appid=de4f59d67ce2c711eb46ddfec300c6c7'
  request.open('GET', url, true);
  request.send();
  request.onload = function() {
      var data = JSON.parse(this.response)
      try {
        var a = (`${name} : ${data.main.temp}`)
      }catch(error){
        a = null
      }

      console.log(a);


  
  }

  }

