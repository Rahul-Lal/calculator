var num1, num2, answer = 0, temporaryValue = "";
var functionOfChoice = ["+", "-", ];
var chosenFunction;

// declare for numerals
var oneButton = document.getElementById("btnOne");
var twoButton = document.getElementById("btnTwo");
var threeButton = document.getElementById("btnThree");
var fourButton = document.getElementById("btnFour");
var fiveButton = document.getElementById("btnFive");
var sixButton = document.getElementById("btnSix");
var sevenButton = document.getElementById("btnSeven");
var eightButton = document.getElementById("btnEight");
var nineButton = document.getElementById("btnNine");
var zeroButton = document.getElementById("btnZero");

//declare for functions
var addButton = document.getElementById("btnAddition");
var subtractbutton = document.getElementById("btnSubtraction");
var multiplybutton = document.getElementById("btnMultiplication");
var dividebutton = document.getElementById("btnDivision");
var equalbutton = document.getElementById("btnEquals");


// Save 'value' in 'temporaryValue' 
function saveValue() {
    if ((!isNaN(txtOutput_Value.value) || txtOutput_Value.value !== "." || txtOutput_Value.value !== "") && (num1 != undefined))
    {
        txtOutput = "";
        if (!isNaN(txtOutput_Value) || txtOutput_Value === ".")
        {
            num2 = txtOutput;
            txtOutput = "";
        }
    }
    else {
        alert("There is no value!!!");
    }

}

function clearAll() {
    var equation = []
    var answer = 0;
    var temporaryValue = "";
    txtOutput_Value.innerHTML = "";
}

function clearEntry() {
    var temporaryValue = "";
    equation.push(temporaryValue);
    txtOutput_Value.innerHTML = "";
}

function btnAddition_Click() {
    /*equation.push(temporaryValue);
    equation.push("+");
    var temporaryValue = "";
    txtOutput_Value.innerText = temporaryValue;*/

    if((txtOutput.value !== "") && (txtOutput.value !== ".") && (txtOutput.value !== undefined))
    {
        num1 = number(txtOutput.value);
        chosenFunction = functionOfChoice[0];
        console.log(string(num1) + " " + chosenFunction);
        txtOutput.value = "";
    } 
    else
    {
        alert("NO VALUE!!");
    }
}

function btnSubtraction_Click() {
    equation.push(temporaryValue);
    equation.push("-");
    temporaryValue = "";
}

function btnMultiplication_Click() {
    equation.push(temporaryValue);
    equation.push("*");
    temporaryValue = "";
}

function btnDivision_Click() {
    equation.push(temporaryValue);
    equation.push("/");
    temporaryValue = "";
}

function btnEquals_Click() {
    /*equation.push(temporaryValue);
    num1 = Number(equation[0]);

    for (i = 1; i < equation.length; i++) {
        var symbol = equation[i];
        num2 = Number(equation[i++]);

        if (symbol === "+") {
            answer = num1 + num2;
        }
        else if (symbol === "-") {
            answer = num1 - num2;
        }
        else if (symbol === "*") {
            answer = num1 * num2;
        }
        else if (symbol === "/") {
            answer = num1 / num2;
        }

        txtOutput_Value.innerHTML = answer;
        equation = [];
        temporaryValue = "";*/

        num2 = number(txtOutput.value);

            if(chosenFunction === functionOfChoice[0])
            {
                answer = num1 + num2;
            }
            else if(chosenFunction === functionOfChoice[1])
            {
                answer = num1 - num2;
            }
            else if(chosenFunction === functionOfChoice[2])
            {
                answer = num1 * num2;
            }
            else if(chosenFunction === functionOfChoice[3])
            {
                answer = num1 / num2;
            }
            else
            {
                alert("No Value!!");
            }

            txtOutput.value = string(answer);
}

function negativeNumbers() {
    if (num1 < 0) {
        num1 = Math.abs(num1) + "-";
    }

    txtOutput_Value = num1;
}

function btnOne_Click() {
    txtOutput.value += "1";
}

function btnTwo_Click() {
    txtOutput.value += "2";
}

function btnThree_Click() {
    txtOutput.value += "3";
}

function btnThree_Click() {
    txtOutput.value += "3";
}

function btnFour_Click() {
    txtOutput.value += "4";
}

function btnFive_Click() {
    txtOutput.value += "5";
}

function btnSix_Click() {
    txtOutput.value += "6";
}

function btnSeven_Click() {
    txtOutput.value += "7";
}

function btnEight_Click() {
    txtOutput.value += "8";
}

function btnNine_Click() {
    txtOutput.value += "9";
}

function btnZero_Click() {
    txtOutput.value += "0";
}

// numeral buttons
oneButton.addEventListener("click", btnOne_Click());

// function buttons
addButton.addEventListener("click", btnAddition_Click());
subtractbutton.addEventListener("click", btnSubtraction_Click());
multiplybutton.addEventListener("click", btnMultiplication_Click());
dividebutton.addEventListener("click", btnDivision_Click());
equalbutton.addEventListener("click", btnEquals_Click());