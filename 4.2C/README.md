# Calculator Microservice

    A microservice to perform basic arithmetic operations including exponential, modulo and square root

 ## Instructions for running program
    Run the following line of codes in the terminal after cloning to the local reposotory
    - npm install
    - node .

    server runs on http://localhost:3040   

    - API Endpoints 
        /add
        /subtract
        /multiply
        /divide
        /power
        /sqrt
        /modulo
    - Query params
        n1, n2 (only n1 for Square root)

    Example for addition of two numbers : http://localhost:3040/add?n1=50&n2=5


## Features
- Support for following arithmetic operations: add, subtract, multiply, divide, exponential, square root, modulo
- Implements proper error handling for invalid inputs and division by zero
- Error handling for negative square roots
- Optimized processing for single input operation like square root
- Uses Winston for logging requests and errors


The program is hosted using Node.js and the API endpoints are designed using express. Seven different API's are designed each of which takes a callback function for performing different types of arithmetic operations. The user inputs are provided through query requests and validated before performing the operations. 
Try Catch blocks are used for error handling and customized error message are thrown for different types of error. The server sends a response with statuscode and result after performing the operations.
Winston library is used for logging the information after different types of events.
All the errors are logged into error.log file and rest of the events are logged into combined.log
