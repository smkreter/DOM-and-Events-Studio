// Write your JavaScript code here.
// Remember to pay attention to page loading!
let takeoffButton = null;
let flightStatus = null;
//let shuttleAlt.innerHTML = 0;
window.addEventListener("load", function() {
    takeoffButton = document.getElementById("takeoff");
    flightStatus = document.getElementById("flightStatus");
    let shuttleFlightScreen = document.getElementById("shuttleBackground");
    let shuttleAlt = document.getElementById("spaceShuttleHeight");
    shuttleAlt.innerHTML = 0;
    //let shuttleHeight = shuttleHeightGraph.innerHTML;
    takeoffButton.onclick = function() {
        let takeOffConfirmation = window.confirm("Confirm that the shuttle is ready for takeoff")
        if (takeOffConfirmation === true) {
        flightStatus.innerHTML = "Shuttle in flight."
        shuttleFlightScreen.style.background = "blue";
        currentAlt = Number(shuttleAlt.innerHTML);
        newAlt = 10000 + currentAlt;
        shuttleAlt.innerHTML = newAlt;
        // still a string after this shuttleAlt.innerHTML = parseFloat(shuttleAlt.innerHTML);
        // this still gives me a string: shuttleAlt.innerHTML = parseInt(shuttleAlt.innerHTML, 10);
        // this one still gives me a string: shuttleAlt.innerHTML = Number(shuttleAlt.innerHTML);
        //shuttleAlt.innerHTML = typeof shuttleAlt.innerHTML;
        //shuttleAlt.innerHTML = shuttleAlt.innerHTML + 10000;  
        //shu
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
