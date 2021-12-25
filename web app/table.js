/*function add(){
    let year = $("input[name='year']").val();
    let month = $("input[name='month']").val();
    let date = $("input[name='date']").val();
    let sensor = $("input[name='sensor']").val();

  
    $('#student tr:last').after(`<tr><td>${year}</td><td>${month}</td><td>${date}</td><td>${sensor}</td></tr>`);
  }*/

  

  function add(){
   let year = $("input[name='year']").val();
    let month = $("input[name='month']").val();
    let date = $("input[name='date']").val();
    let time = $("input[name='time']").val();
    let location = $("input[name='location']").val();
    
    console.log(year);
    console.log(month);
    console.log(date);
    console.log(time);
    console.log(location);
    //linkurl='year/'+year+'/'+'month/'+month+'/'+'date/'+date+'/'+'time/'+time+'/'+'location/'+location;
    linkurl='year/'+year+'/'+'month/'+month+'/'+'date/'+date+'/'+'time/'+time+'/'+'location';
    console.log(linkurl);

    var ref = firebase.database().ref(linkurl);
  ref.once("value")
    .then(function(childSnapshot) {
      
      var humidityair = childSnapshot.child("humidityair").val(); 
      var ph = childSnapshot.child("ph").val();// "last"



      
      
      var watersoil =childSnapshot.child("watersoil").val();
      var watersource =childSnapshot.child("watersource").val();
      var tds =childSnapshot.child("tds").val();
      var temperatureair  =childSnapshot.child("temperatureair").val();
      var temperaturesoil =childSnapshot.child("temperaturesoil").val();
      //var ph1=childSnapshot.child("ph").key;
      console.log(humidityair);
      console.log(ph);
      console.log(watersoil);
      console.log(watersource);
      console.log(tds);
      console.log(temperaturesoil);
      console.log(temperatureair);
      allvalue(humidityair, temperatureair,temperaturesoil,watersoil,watersource,ph,tds);
      
      
    });
  
   
    
  





    /*var query = firebase.database().ref(linkurl);
    
query.once("value").then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      // key will be "ada" the first time and "alan" the second time
     // var key = childSnapshot.key;
      //console.log(key);
      // childData will be the actual contents of the child
      //var childData = childSnapshot.val();
     
      var humidityair=childSnapshot.val();
      //console.log(humidityair);
      var ph=childSnapshot.val();
      
      var watersoil =childSnapshot.child("watersoil").val();
      var watersource =childSnapshot.child("watersource").val();
      var tds =childSnapshot.child("tds").val();
      var temperatureair  =childSnapshot.child("temperatureair").val();
      var temperaturesoil =childSnapshot.child("temperaturesoil").val();
      //var ph1=childSnapshot.child("ph").key;
      console.log(humidityair);
      console.log(ph);
      console.log(watersoil);
      console.log(watersource);
      console.log(tds);
      console.log(temperaturesoil);
      console.log(temperatureair);
      allvalue(humidityair, temperatureair,temperaturesoil,watersoil,watersource,ph,tds);
      
      //console.log(ph);
  });
});*/
function allvalue(humidityair, temperatureair,temperaturesoil,watersoil,watersource,ph,tds){

    //console.log(ph);
    //console.log(humidityair);
    //$('#student tr:last').after(`<tr><td>${year}</td><td>${month}</td><td>${date}</td><td>${time}</td><td>${location}</td><td>1</td><td>${humidityair}</td><td>${temperatureair}</td><td>${temperaturesoil}</td><td>${watersoil}</td><td>${watersource}</td><td>${ph}</td><td>${tds}</td></tr>`);
    $('#student tr:last').after(`<tr><td>${year}</td><td>${month}</td><td>${date}</td><td>${time}</td><td>${location}</td><td>1</td><td>${humidityair}</td><td>${ph}</td><td>${watersoil}</td><td>${watersource}</td><td>${tds}</td><td>${temperaturesoil}</td><td>   ${temperaturesoil}</td></tr>`);

}
  }
  





  /*dbref='year/'+year+'/'+'month/'+month+'/'+'date/'+date+'/';
   //console.log(dbref);
   //console.log(dbref+sensor+'/'+'humidity-air');
   var humidityinair=firebase.database().ref(dbref+sensor+'/'+'humidity-air');
   
  var temperatureinair=firebase.database().ref(dbref+sensor+'/temperature-air/');

 var temperatureinsoil=firebase.database().ref(dbref+sensor+'/temperature-soil/');
  var waterinsoil=firebase.database().ref(dbref+sensor+'/water-in-soil/');
  var waterinsource=firebase.database().ref(dbref+sensor+'/water-source/');
  
  var ph=firebase.database().ref(dbref+sensor+'/ph/');
  var tds=firebase.database().ref(dbref+sensor+'/tds/');

  humidityinair.on("value", function(humiditysair) {
    console.log(humiditysair.val());
    return(humiditysair.val());
  }, function (error) {
    console.log("Error: " + error.code);
  });
  
  temperatureinair.on("value", function(temperaturesair) {
    console.log(temperaturesair.val());
    return(temperaturesair.val());
  }, function (error) {
    console.log("Error: " + error.code);
  });
   
  temperatureinsoil.on("value", function(temperaturessoil) {
    console.log(temperaturessoil.val());
    return(temperaturessoil.val());
  }, function (error) {
    console.log("Error: " + error.code);
  });
   
  waterinsoil.on("value", function(waterssoil) {
    console.log(waterssoil.val());
    return(waterssoil.val());
  }, function (error) {
    console.log("Error: " + error.code);
  });
   
  waterinsource.on("value", function(waterssource) {
    console.log(waterssource.val());
    return(waterssource.val());
  }, function (error) {
    console.log("Error: " + error.code);
  });
   
  ph.on("value", function(phs) {
    console.log(phs.val());
    phs1=phs.val();
    return(phs.val());
  }, function (error) {
    console.log("Error: " + error.code);
  });
  tds.on("value", function(tdss) {
    console.log(tdss.val());
    return(tdss.val());
  }, function (error) {
    console.log("Error: " + error.code);

  });
  $('#student tr:last').after(`<tr><td>phs1</td></tr>`);
 

  //$('#student tr:last').after(`<tr><td>${}</td><td>${month}</td><td>${date}</td><td>${sensor}</td><td>${year}</td><td>${year}</td><td>${year}</td><td>${year}</td></tr>`);


 
  
  
  


 /*humidityinair.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (error) {
  console.log("Error: " + error.code);
});

temperatureinair.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (error) {
  console.log("Error: " + error.code);
});
 
temperatureinsoil.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (error) {
  console.log("Error: " + error.code);
});
 
waterinsoil.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (error) {
  console.log("Error: " + error.code);
});
 
waterinsource.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (error) {
  console.log("Error: " + error.code);
});
 
ph.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (error) {
  console.log("Error: " + error.code);
});
tds.on("value", function(snapshot) {
  console.log(snapshot.val());
}, function (error) {
  console.log("Error: " + error.code);
});*/



//$('#student tr:last').after(`<tr><td>${year}</td><td>${month}</td><td>${date}</td><td>${sensor}</td><td>${year}</td><td>${year}</td><td>${year}</td><td>${year}</td></tr>`);

