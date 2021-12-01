//This function is used to play the game craps on the webpage. When you click the button it "rolls" two dice and tells you if you won, lost, or drew based on the rules of craps.
function playCraps(){   //creating a function to play the game craps on the webpage
    console.log("playCraps() started");     //a log in the console stating that the playCraps() function is activated
        var die1 = Math.ceil(Math.random() * 6);    //selected random number betweeen 0 and 1, multiplied by 6, rounded up and stored in die1
        var die2 = Math.ceil(Math.random() * 6);    //selected random number betweeen 0 and 1, multiplied by 6, rounded up and stored in die2
        var sum = die1 + die2;                      //creating a variable for the sum of die1 and die2
        document.getElementById("die1Res").innerHTML = die1;    //writing in HTML on the webpage what die1 equals
        document.getElementById("die2Res").innerHTML = die2;    //writing in HTML on the webpage what die2 equals
        document.getElementById("sum1Res").innerHTML = sum;     //writing in HTML on the webpage what the sum of die1 and die2 equals
        if (sum == 7 || sum == 11) {            //an if statement that is looking to see if the sum of die1 and die2 is either 7 or 11
            document.getElementById("finalRes").innerHTML =     //writing in HTML "CRAPS - you lose" if the sum is 7 or 11
            "CRAPS - you lose";
        }
        else if (die1 == die2 && die1 % 2 == 0) {       //an else if statement checking to see if both die1 and die2 are the same number
            document.getElementById("finalRes").innerHTML =     //writing in HTML "DOUBLES - you win" if die1 and die2 are the same number
            "DOUBLES - you win";
        } else {
            document.getElementById("finalRes").innerHTML =     //an else statement that writes in HTML "DRAW - you did not win or lose, please try again." if the dice dont align with the previous if and else if statements
            "DRAW - you did not win or lose, please try again.";
        } 
}

//This function is used to start a counting sequence. When you click the start button it counts down from 50 by 5 to 0 and then says "Blastoff!".
function blastOff(){    //creating a function to count down from 50
    var currTime = 50;  //creating a variable for the starting time
    document.getElementById("countDownTimer").innerHTML = currTime;     //retriving the countDownTimer id from the index 
    setTimeout(function(){      //creating a timer for the blastOff function
        currTime = currTime - 5;    //the current time variable has 5 subtracted from it
        document.getElementById("countDownTimer").innerHTML = currTime;     //the new currTime is written in HTML by the countDowwnTimer
    }, 5000);       //it takes 5 seconds to show the new currTime
    setTimeout(function(){      //creating a timer for the blastOff function
        currTime = currTime - 5;    //the current time variable has 5 subtracted from it
        document.getElementById("countDownTimer").innerHTML = currTime;     //the new currTime is written in HTML by the countDowwnTimer
    }, 10000);      //it takes 10 seconds to show the new currTime
    setTimeout(function(){      //creating a timer for the blastOff function
        currTime = currTime - 5;    //the current time variable has 5 subtracted from it
        document.getElementById("countDownTimer").innerHTML = currTime;     //the new currTime is written in HTML by the countDowwnTimer
    }, 15000);      //it takes 15 seconds to show the new currTime
    setTimeout(function(){      //creating a timer for the blastOff function
        currTime = currTime - 5;    //the current time variable has 5 subtracted from it
        document.getElementById("countDownTimer").innerHTML = currTime;     //the new currTime is written in HTML by the countDowwnTimer
    }, 20000);      //it takes 20 seconds to show the new currTime
    setTimeout(function(){      //creating a timer for the blastOff function
        currTime = currTime - 5;    //the current time variable has 5 subtracted from it
        document.getElementById("countDownTimer").innerHTML = currTime;     //the new currTime is written in HTML by the countDowwnTimer
    }, 25000);      //it takes 25 seconds to show the new currTime
    setTimeout(function(){      //creating a timer for the blastOff function
        currTime = currTime - 5;    //the current time variable has 5 subtracted from it
        document.getElementById("countDownTimer").innerHTML = currTime;     //the new currTime is written in HTML by the countDowwnTimer
    }, 30000);      //it takes 30 seconds to show the new currTime
    setTimeout(function(){      //creating a timer for the blastOff function
        currTime = currTime - 5;    //the current time variable has 5 subtracted from it
        document.getElementById("countDownTimer").innerHTML = currTime;     //the new currTime is written in HTML by the countDowwnTimer
    }, 35000);      //it takes 35 seconds to show the new currTime
    setTimeout(function(){      //creating a timer for the blastOff function
        currTime = currTime - 5;    //the current time variable has 5 subtracted from it
        document.getElementById("countDownTimer").innerHTML = currTime;     //the new currTime is written in HTML by the countDowwnTimer
    }, 40000);      //it takes 40 seconds to show the new currTime
    setTimeout(function(){      //creating a timer for the blastOff function
        currTime = currTime - 5;    //the current time variable has 5 subtracted from it
        document.getElementById("countDownTimer").innerHTML = currTime;     //the new currTime is written in HTML by the countDowwnTimer
    }, 45000);      //it takes 45 seconds to show the new currTime
    setTimeout(function(){      //creating a timer for the blastOff function
        currTime = currTime - 5;    //the current time variable has 5 subtracted from it
        document.getElementById("countDownTimer").innerHTML = "Blastoff!";      //the new currTime is written in HTML by the countDowwnTimer, it is zero so the countDonwTimer says "Blastoff!"
    }, 50000);      //it takes 50 seconds to show the new currTime
}

function btrBlastOff(){
    console.log("btrBlastOff started");
    var currTime = 50; 
    for(var i = 0; i <= 10; i = i + 1){
        setTimeout(function(){
            if(currTime > 25){
                document.getElementById("countDownTimer").innerHTML = currTime;
            } else if (currTime == 0) {
                document.getElementById("countDownTimer").innerHTML = "Blastoff!";
            } else {
                document.getElementById("countDownTimer").innerHTML = 
                "Warning Less than ½ way to launch, time left = " + currTime;
            }
            currTime = currTime - 5;
        },5000 * i);

    }

}

function start(){
    console.log("start() function started");
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function stop(){
    console.log("stop() function started");
    clearInterval(timer);
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}

function getData(){
    var loadedData = loadData();
    return loadedData;
}

function dataRow(legend, value, units){
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}

function playStation(){
    console.log("playStation() started");
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}

function sound(srcFile){
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    //this.sound.setAttribute("preload", "audio");
    //this.sound.setAttribute("controls", "none");
    //this.sound.style.display = "none";
    //document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

function playBowie(){
    console.log("playBowie() started");
    mySound = new sound("DavidBowie-SpaceOddity.mp3");
    mySound.play();
}

class InputData {
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ,
    ){
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}

function goLogin(){
    console.log("goLogin() started");
    location.replace("login.html");
}

function goBoards(){
    console.log("goBoards() started");
    location.replace("boards.html");
}

function goIndex(){
    console.log("goIndex() started");
    location.replace("index.html");
}