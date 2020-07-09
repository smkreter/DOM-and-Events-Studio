// Write your JavaScript code here.
// Remember to pay attention to page loading!
let takeoffButton = null;
let flightStatus = null;
window.addEventListener("load", function() {
    takeoffButton = document.getElementById("takeoff");
    flightStatus = document.getElementById("flightStatus");
    let shuttleFlightScreen = document.getElementById("shuttleBackground");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    takeoffButton.onclick = function() {
        let takeOffConfirmation = window.confirm("Confirm that the shuttle is ready for takeoff")
        if (takeOffConfirmation === true) {
        flightStatus.innerHTML = "Shuttle in flight."
        shuttleFlightScreen.style.background = "blue";
        Number(shuttleHeight.innerHTML);
        shuttleHeight.innerHTML = 10000;            
        }
    }
    /*
    takeoffButton.addEventListener("click", function(event) {
        flightStatus.innerHTML = "Shuttle in flight.";
        */
    });
