// helper functions
function getValue(){
    return parseInt(document.getElementById("counter").textContent);
}

function setValue(value){
    document.getElementById("counter").textContent = value;
}

//tick up and tick down
function tickUp(){
    let cur = getValue();
    setValue(cur + 1);
}

function tickDown(){
    let cur = getValue();
    setValue(cur - 1);
}

//for loop
function runForLoop(){
    let cur = getValue();
    let res = "";

    for(let i = 0; i <= cur; i++){
        res += i + " ";
    }

    document.getElementById("forLoopResult").textContent = res;
}

//show odd numbers
function showOddNumbers(){
    let cur = getValue();
    let res = "";

    for(let i = 1; i <= cur; i++){
        if(i % 2 !== 0){
            res += i + " ";
        }
    }

    document.getElementById("oddNumberResult").textContent = res;
}

//add multiples to array
function addMultiplesToArray(){
    let cur = getValue();
    let multiples = [];

    for(let i = 5; i <= cur; i += 5){
        multiples.push(i);
    }

    multiples.reverse();

    console.log(multiples);
}

// print car obejct
function printCarObject(){
    let type = document.getElementById("carType").value;
    let mpg = document.getElementById("carMPG").value;
    let color = document.getElementById("carColor").value;

    let car ={
        cType: type,
        cMPG: mpg,
        cColor: color
    };

    console.log(car);
}

// load car
function loadCar(numCar){
    let car;

    if(numCar == 1){
        car = carObject1;
    } else if(numCar == 2){
        car = carObject2;
    } else if(numCar == 3){
        car = carObject3;
    }

    document.getElementById("carType").value = car.cType;
    document.getElementById("carMPG").value = car.cMPG;
    document.getElementById("carColor").value = car.cColor;
}

//change color
function changeColor(color){
    let paragraph = document.getElementById("styleParagraph");

    if(color == 1){
        paragraph.style.color = "red";
    } else if(color == 2){
        paragraph.style.color = "green";
    } else if(color == 3){
        paragraph.style.color = "blue";
    }
}