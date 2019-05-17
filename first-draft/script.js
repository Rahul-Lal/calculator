var equation = []
var answer = 0;
var temporaryValue = "";
// var currentValue = document.getElementById("txtOutput").value;
var txtOutput_Value = document.getElementById("txtOutput");

document.addEventListener("click", function()
{
    var value = txtOutput_Value.value();

    // Save 'value' in 'temporaryValue' 
    function saveValue()
    {
        if(!isNaN(value) || value === ".")
        {
            temporaryValue += value;
            txtOutput_Value.value = value.subString(0, 10);
        }
        else
        {
            alert("There is no value!!!");
        }
    }

    function clearAll()
    {

    }

    function clearEntry()
    {

    }

});