function initMap(){
   //Map option 
    var options = {
        zoom:14,
        center: {
            lat: 49.2967851,
            lng: 19.9503393}
        };

        
    // New map    
      var map = new google.maps.Map(
      document.getElementById('map'), options);
     
     
      //Array of marker
      var markers = [
        {
            coords:{lat:49.3017553, lng:19.9475927},
            content:'<h5>5 Stars Hotel</h5>',
            iconImage:'assets/icons/hotel_5stars.png'
            
    },
        {
            coords:{lat:49.2928443, lng:19.9576864},
            content:'<h5>Apartment</h5>',
            iconImage:'assets/icons/apartment.icon.png'
    },
        {
            coords:{lat:49.2942774, lng:19.9358511},
            content:'<h5>House</h5>',
            iconImage:'assets/icons/house.icon.png'
    },
        {
            coords:{lat:49.2888585, lng:19.9420309},
            content:'<h5>3 Stars Hotel</h5>',
            iconImage:'assets/icons/hotel_3stars.png'
    },
     
          ];
          
   // Loop through markers
   for(var i= 0;i < markers.length;i++){
       addMarker(markers[i]);
   }
   
    // Add marker function
    function addMarker(props){
         var marker = new google.maps.Marker({
        position:props.coords,
        map: map,
    });
   //check for custom icon 
    if(props.iconImage){
        //set icon image
        marker.setIcon(props.iconImage);
    }
    //Check content
    if(props.content){
       var infoWindow = new google.maps.InfoWindow({
        content:props.content
    });
    
    marker.addListener('click', function(){
        infoWindow.open(map, marker);   
    }); 
    }
}
}