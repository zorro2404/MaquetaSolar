
function configureBox(nametitle){
  var boxText = document.createElement("div");
  boxText.style.cssText = "border: 2px solid blue ; margin-top: 8px; background:rgb(185, 220, 139); padding: 7px; height: 230px; width: 160px;";
  boxText.innerHTML=settitle(nametitle);
  return boxText;
 
}
function settitle(titlename){
  var contentString = '<div id="content" >  <h3 style="color:black">' + titlename +'</h3> <img src="dist/img/panelsolarmini.jpg" class="img-circle" alt="logo Image"> <br> <br>'+'<span style="color:blue;">'+'Potencia : <span style="color:red"> 50 kw </span>'+'<br>'+'</span>'+'<span style="color:blue">'+
   'Generacion total: <span style="color:red"> 350,00 kw </span>' + '</span>' + '<br>' +'<span><a href="datapage.html"><strong>Mas detalles</strong></a></span> '
 '</div>';
 return contentString;
}

function eventlistener(markeroption,configure,currentmap){
 google.maps.event.addListener(markeroption,'click',function() {
   var infobox = new InfoBox(configure);
 infobox.open(currentmap,markeroption);
 });


}  
function myMap() {
  var myCenter = new google.maps.LatLng(-37.323008, -59.123461);
  var myCenter2 = new google.maps.LatLng(-37.321881, -59.113805);
  var myCenter3 = new google.maps.LatLng(-37.323349, -59.133632);
  var mapCanvas = document.getElementById("world-map-markers");
  var mapOptions = {center: myCenter, zoom: 14};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter,icon:"scriptmap/circulo1.png"});
    var marker2= new google.maps.Marker({position:myCenter2,icon:"scriptmap/circulo1.png"});
    var marker3=new google.maps.Marker({position:myCenter3,icon:"scriptmap/circulo1.png"});
    marker.setMap(map);
    marker2.setMap(map);
    marker3.setMap(map);



    var contentString = '<div id="content"> <h3 style="color:black">Inversor</h3> <br>'+'<span style="color:blue;">'+'Potencia : <span style="color:red"> 50 kw </span>'+'<br>'+'</span>'+'<span style="color:blue">'+
    'Generacion total: <span style="color:red"> 350,00 kw </span>'+'</span>'+
    '</div>';
    


      var boxText = document.createElement("div");
      boxText.style.cssText = "border: 5px solid blue ; margin-top: 20px; background:MediumSeaGreen; padding: 8px;";
      boxText.innerHTML=settitle("Inversor");
     

       var myoptions={
         content: configureBox("Panel Solar"), 
       };

       var myoptions2={
         content: configureBox("Panel Solar")
       }
      var myoptions3={
        content:configureBox("Panel Solar")
      }

    eventlistener(marker,myoptions,map); 
    eventlistener(marker2,myoptions3,map);
    eventlistener(marker3,myoptions2,map);
 
     
    }
    