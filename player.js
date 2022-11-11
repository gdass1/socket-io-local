
let monestirStatus1 = document.getElementById("parking-monestir-status-1");
let monestirStatus2 = document.getElementById("parking-monestir-status-2");
let monestirStatus3 = document.getElementById("parking-monestir-status-3");

let cremalleraStatus1 = document.getElementById("parking-cremallera-status-1");
let cremalleraStatus2 = document.getElementById("parking-cremallera-status-2");
let cremalleraStatus3 = document.getElementById("parking-cremallera-status-3");

var socket = io.connect("http://gagandeep.alwaysdata.net", { forceNew: true });

socket.on('admira', function (data) {
    
    data.toLowerCase()

    if(data === 'lliure') {
        
    }
    console.log(data)

    monestirStatus1.innerHTML = data
    cremalleraStatus1.innerHTML = data
})