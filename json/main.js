let request = new XMLHttpRequest();

request.open('GET',"https://restcountries.eu/rest/v2/all",true)

request.send();

 // let respJson = [];

 request.onload = function () {
  
  //print all restcountries in json format

  data = JSON.parse(this.response)
  console.log(data)
  
//print all country name using for loop
 //  resp = this.responseText

  // respJson =  JSON.parse(resp)
  
 /* for (let i = 0;i<respJson.length;i++){
    console.log(respJson[i].name)
  } */
for (let i in data) {
  console.log(data[i].flag)
}


 }





   
