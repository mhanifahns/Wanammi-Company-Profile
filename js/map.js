   function initialize() {
      var posisi = new google.maps.LatLng(-6.590821, 106.759817);
      var pengaturan = {
        zoom: 8,
        center: posisi
      }
      var map = new google.maps.Map(document.getElementById('map'), pengaturan);
 
      var tanda = new google.maps.Marker({
         map: map,
        position: posisi,
       
      });
    }
    google.maps.event.addDomListener(window, 'load', initialize);