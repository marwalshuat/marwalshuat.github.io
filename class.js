class Propulsion {
    constructor(
        speed,
        power,
        burnTime
    ){
        this.speed = speed;
        this.power = power;
        this.burnTime = burnTime;
    }
    //list methods
    launch(){
        alert("Spacecraft lifting off");
        return true;
    }
    landing(){
        alert("Spacecraft landing");
        return true;
    }
    loadFuel(fuelType, fuelAmt){
        alert("Loading spacecraft with " + fuelAmt + " gallons of " + fuelType + " fuel.");
        return true;
    }
}

class Payload {
    constructor(
        size,
        value,
        destination
    ){
        this.size = size;
        this.value = value;
        this.destination = destination;
    }
    //list methods
    loadPayload(payloadType){
        alert("The " + payloadType + " payload is being loaded.");
        return true;
    }
    deliverPayload(){
        alert("The " + payloadType + " payload is being delivered.");
        return true;
    }
    loadFuel(damagePercent, acceptablility){
        alert("The " + payloadType + " has recieved " + damagePercent + "% damage in transit. It is " + acceptablility + " for delivery to client.");
        return true;
    }
}

class Mission {
    //properties first
    constructor(
        fuelLevel,
        oxyLvl,
        foodLvl,
        spaceCraftName,
        launchDateDay,
        launchDateMonth,
        launchDateYear,
        numOfAstronauts
    ){  //substaniate
        this.fuelLevel = fuelLevel;
        this.oxyLvl = oxyLvl;
        this.foodLvl = foodLvl;
        this.spaceCraftName = spaceCraftName;
        this.launchDateDay = launchDateDay;
        this.launchDateMonth = launchDateMonth;
        this.launchDateYear = launchDateYear;
        this.numOfAstronauts = numOfAstronauts;
    }

    launch(){
        alert("we are taking off");
    }

    disMissionLaunchDate(){
        alert("This mission launches on " + this.launchDateMonth 
        + " " + this.launchDateDay + ", " + this.launchDateYear 
        + " with " + this.numOfAstronauts + " astronauts aboard.")
    }
}

function launchFall(){
    console.log("launchFall() started");
    fallLaunch.launch();
}

function displayFall(){
    console.log("displayFall() started");
    fallLaunch.disMissionLaunchDate();
}

function launchSpring(){
    console.logI("launchSpring() started");
    springLaunch.launch();
}

function displaySpring(){
    console.log("displaySpring() started");
    springLaunch.disMissionLaunchDate();
}