Declare 'entries' variable as array
Declare 'total' variable as integer of 0
Declare 'temp' variable as string of ""

When button is clicked, the following functions will be :
    Declare 'value' variable as string of the html element id name

    IF 'value' is NOT undefined OR 'value' has the value of "."
    THEN the value of 'temp' is incremented with 'value'
    THEN the value of the textbox will have the value of 'temp'

    ELSE IF 'value' equals to "CE"
    THEN 'temp' equals to blank string
    THEN the value of the textbox will have the value of 'temp'


    ELSE IF 'value' equals to "x"
    THEN increment the 'value' to the 'entries' array
    THEN the value of the textbox will have the value of 'temp'