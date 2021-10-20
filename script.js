/*SET DEFUAULT VALUES*/
var divInput = document.getElementsByName('divisor[]');
var buzzInput = document.getElementsByName('buzzword[]');

document.getElementById('start').value = 1;
document.getElementById('end').value = 100;

const defaultArr = [
    [3, "Fizz"],
    [5, "Buzz"],
    [7, "Fish"],
    [8, "Bus"],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""]
]

for (let i = 1; i <= divInput.length; i++) {
    document.getElementById('div' + i).value = defaultArr[i-1][0];
    document.getElementById('buzz' + i).value = defaultArr[i-1][1];
}



function Divide() {

    /*ARRAYS TO FILL WITH SUBMITTED DIVISOR AND BUZZWORD INPUTS*/
    const divArr = [];
    const buzzArr = [];

    /*DOCUMENT SUBMITTED INPUTS*/
    divInput = document.getElementsByName('divisor[]');
    buzzInput = document.getElementsByName('buzzword[]');
    var start = document.getElementById('start').value;
    var end = document.getElementById('end').value;

    /*ASSIGN INPUTS TO RESPECTIVE ARRAYS*/
    for (let i = 0; i < divInput.length; i++) {
        var a = divInput[i];
        divArr.push(a.value);
    }
    for (let i = 0; i < buzzInput.length; i++) {
        var b = buzzInput[i];
        buzzArr.push(b.value);
    }

    console.log("START");

    /*INCREMENT THROUGH NUMBERS FROM START TO END*/
    for (let i = start; i <= end; i++) {

        /*SETUP CONSOLE LOG PRINTOUT*/
        var buzzTrue = i + " ";

        /*LOOP THROUGH ARRAYS FOR VALID DIVISORS*/
        for (let j = 0; j < divInput.length; j++) {
            
            /*APPLY BUZZWORD IF DIVISOR IS VALID*/
            if (i % divInput[j].value === 0) {
                buzzTrue += buzzInput[j].value;    
            }
            
        }

        /*PRINT NUMBER, AND INCLUDE BUZZWORDS IF NOT NULL*/
        if (buzzTrue) {
            console.log(buzzTrue);
        } else {
            console.log(i);
        }
        
    }

    console.log("END");

    findLCM(divArr, divArr.length);

    /*FIND THE LOWEST COMMON MULTIPLIER OF THE DIVISORS*/
    function findLCM(arr, n) {

        /*INITIATE FUNCTION VARIABLES*/
        console.log("searching for LCM...");
        var ans = arr[0];
        var large;
        var small;
        buzzTrue = "";

        /*LOOP THROUGH DIVISOR ARRAY*/
        for (let i = 0; i < n; i++) {

            /*COMPARE THE SIZE OF THE CURRENT ELEMENT AND ITS NEIGHBOUR*/
            if (arr[i+1] !== null) {

                /*DECLARE WHICH OF THE TWO IS THE LARGEST*/
                large = arr[i] >= arr[i+1] ? arr[i] : arr[i+1];
                small = large === arr[i] ? arr[i+1] : arr[i];

                /*IF THE LARGER IS NOT A MULTIPLE OF THE SMALLER, MULTIPLY THE CURRENT ELEMENT WITH ITS NEIGHBOUR*/
                if ( (large % small) !== 0 && small > 0) {
                    ans = ans * arr[i+1];
                }
            }

            /*ATTACH THIS ELEMENT'S BUZZWORD TO A STRING*/
            buzzTrue += buzzInput[i].value
        }

        console.log(ans + " " + buzzTrue);
    }

}
