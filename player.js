

let monestirStatus1 = document.getElementById("parking-monestir-status-1");
let monestirStatus2 = document.getElementById("parking-monestir-status-2");
let monestirStatus3 = document.getElementById("parking-monestir-status-3");

let cremalleraStatus1 = document.getElementById("parking-cremallera-status-1");
let cremalleraStatus2 = document.getElementById("parking-cremallera-status-2");
let cremalleraStatus3 = document.getElementById("parking-cremallera-status-3");

var socket = io.connect("http://localhost:3000", { forceNew: true });

socket.on('parking', function (data) {

    console.log("Data:-->"+data+"<--")
    

    /*
    if(data.message) {
        console.log("Message: -->"+data.message+"<--")
        monestirStatus1.innerHTML = data.message
        monestirStatus2.innerHTML = data.message
        monestirStatus3.innerHTML = data.message
        cremalleraStatus1.innerHTML = data.message
        cremalleraStatus2.innerHTML = data.message
        cremalleraStatus3.innerHTML = data.message
    }*/

    if(data.parking) {
        console.log("Parking: -->"+data.parking+"<--")
        if(data.parking == 'monestir' || data.parking == 'Monestir') {
            monestirStatus1.innerHTML = data.message
            monestirStatus2.innerHTML = data.message
            monestirStatus3.innerHTML = data.message
        } else {
            data.parking == 'Cremallera';
            cremalleraStatus1.innerHTML = data.message
            cremalleraStatus2.innerHTML = data.message
            cremalleraStatus3.innerHTML = data.message
        }
    }
    
})