// Write your JavaScript code here.
// Remember to pay attention to page loading!
let takeoffButton = null;
let flightStatus = null;
//let shuttleAlt.innerHTML = 0;
window.addEventListener("load", function() {
    takeoffButton = document.getElementById("takeoff");
    landButton = document.getElementById("landing");
    abortButton = document.getElementById("missionAbort");
    flightStatus = document.getElementById("flightStatus");
    let shuttleFlightScreen = document.getElementById("shuttleBackground");
    let shuttleAlt = document.getElementById("spaceShuttleHeight");
    shuttleAlt.innerHTML = 0;
    //let shuttleHeight = shuttleHeightGraph.innerHTML;
    takeoffButton.onclick = function() {
        let takeOffConfirmation = window.confirm("Confirm that the shuttle is ready for takeoff")
        if (takeOffConfirmation === true) {
        flightStatus.innerHTML = "Shuttle in flight.";
        shuttleFlightScreen.style.background = "blue";
        currentAlt = Number(shuttleAlt.innerHTML);
        newAlt = 10000 + currentAlt;
        shuttleAlt.innerHTML = newAlt;
         
        }
    }
    // land button stuff
    landButton.onclick = function() {
        let landingNotice = window.confirm("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleFlightScreen.style.background = "green";
        shuttleAlt.innerHTML = 0;
    }
    // abort mission button
    abortButton.onclick = function() {
        let abortNotice = window.confirm("Confirm that you want to abort the mission.");
        if (abortNotice === true) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleFlightScreen.style.background = "green";
            shuttleAlt.innerHTML = 0;
        }
    }
    });
