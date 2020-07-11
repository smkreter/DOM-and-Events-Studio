// Write your JavaScript code here.
// Remember to pay attention to page loading!
let takeoffButton = null;
let flightStatus = null;
let shuttleAlt = 0;
window.addEventListener("load", function() {
    takeoffButton = document.getElementById("takeoff");
    flightStatus = document.getElementById("flightStatus");
    let shuttleFlightScreen = document.getElementById("shuttleBackground");
    let shuttleAlt = document.getElementById("shuttleAlt");
    //let shuttleHeight = shuttleHeightGraph.innerHTML;
    takeoffButton.onclick = function() {
        let takeOffConfirmation = window.confirm("Confirm that the shuttle is ready for takeoff")
        if (takeOffConfirmation === true) {
        flightStatus.innerHTML = "Shuttle in flight."
        shuttleFlightScreen.style.background = "blue";
        shuttleAlt += 10000;
        /*
        shuttleAlt.innerHTML = Number(shuttleAlt.innerHTML) + 10000;
        shuttleAlt.innerHTML = shuttleAlt.innerHTML.toString;
    
        shuttleHeight = Number(shuttleHeight);
        shuttleHeight = shuttleHeight + 10000;
       
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML);
        shuttleHeight.innerHTML += 10000;  
        */          
        }
    }
    /*
    takeoffButton.addEventListener("click", function(event) {
        flightStatus.innerHTML = "Shuttle in flight.";
        */
    });
