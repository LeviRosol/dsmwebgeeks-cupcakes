
var stores = [
    {
        "name" : "Carefree Patisserie",
        "lat" : 41.572801,
        "long" : -93.709304
    }, 
    {
        "name" : "Scratch Cupcakes",
        "lat" : 41.568164,
        "long" : -93.804817
    },
    {
        "name" : "Creme Cupcakes",
        "lat"  : 41.543053,
        "long"  :-93.661512
    }
];

//$(document).ready(function(){

var onSuccess = function(position) {
    alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude );
    //       'Altitude: '          + position.coords.altitude          + '\n' +
    //       'Accuracy: '          + position.coords.accuracy          + '\n' +
    //       'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
    //       'Heading: '           + position.coords.heading           + '\n' +
    //       'Speed: '             + position.coords.speed             + '\n' +
    //       'Timestamp: '         + position.timestamp                + '\n');
    $("#location").html(position.coords.latitude  + " " position.coords.longitude );
};

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);



    
//});