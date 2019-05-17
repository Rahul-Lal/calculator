Declare 'entries' variable as an empty array
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
        THEN increment 'value' to the 'entries' array
        THEN increment the value of "*" to the 'entries' array
        THEN the value of the textbox will be blank or ""

    ELSE IF 'value' equals to "÷"
        THEN increment 'value' to the 'entries' array
        THEN increment the value of "/" to the 'entries' array
        THEN the value of the textbox will be blank or ""

    ELSE IF 'value' equals to "="
        THEN increment 'temp' to the 'entries' array
        THEN declare 'nt' variable as a integers converted from a string of the first value of the 'entries' array 
    
        THEN FOR each value in the 'entries' array
            Declare 'nextNum' as a integer converted from a the string of the next value of the current one so far
            Declare 'symbol' as the singular array value of the current value so far

            IF 'symbol' equals "+"
                THEN 'nt' is added with 'nextNum'
            ELSE IF 'symbol' equals "-"
                THEN 'nt' is subtracted with 'nextNum'
            ELSE IF 'symbol' equals "*"
                THEN 'nt' is multiplied with 'nextNum'
            ELSE IF 'symbol' equals "/"
                THEN 'nt' is divided with 'nextNum'

            On to the next value of loop

    IF 'nt' is less than 0
        THEN 'nt' equals the absolute value of itself with an "-" at the end
    
    