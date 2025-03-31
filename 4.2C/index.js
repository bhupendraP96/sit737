const express = require("express");
const app = express();

//Using Winston to log information about each API request
const winston = require("winston");
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "calculator-microservice" },
  transports: [
    new winston.transports.Console({ format: winston.format.simple() }),
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

// functions for performing the mathematical operations
const add = (n1, n2) => n1 + n2;
const subtract = (n1, n2) => n1 - n2;
const multiply = (n1, n2) => n1 * n2;
const divide = (n1, n2) => {
    //avoiding divion by 0
  if (n2 === 0) {
    throw new Error("Cannot divide by zero");
  }
  return n1 / n2;
};

// new arithmetic operations
const power = (n1, n2) => Math.pow(n1, n2);
const sqrt = (n1) => {
  if (n1 < 0) throw new Error("Cannot compute square root of a negative number");
  return Math.sqrt(n1);
};
const modulo = (n1, n2) => n1 % n2;

// handling operations
const calculate = (operation, req, res, operationType, singleInput = false) => {
  try {
    const n1 = parseFloat(req.query.n1);
    const n2 = singleInput ? null : parseFloat(req.query.n2);

    // validating user input
    if (isNaN(n1)) throw new Error("n1 incorrectly defined");
    if (!singleInput && isNaN(n2)) throw new Error("n2 incorrectly defined");
  
    const result = singleInput ? operation(n1) : operation(n1, n2);

    //logging info
    logger.info({
      operation: operationType,
      n1,
      n2: singleInput ? undefined : n2,
      result,
      timestamp: new Date().toISOString(),
    });

    res.status(200).json({ statusCode: 200, data: result });
  } catch (error) {
    //logging error
    logger.error({
      message: error.message,
      operation: operationType,
      timestamp: new Date().toISOString(),
    });

    res.status(500).json({ statusCode: 500, msg: error.toString() });
  }
};

// API Endpoints
app.get("/add", (req, res) => calculate(add, req, res, "addition"));
app.get("/subtract", (req, res) => calculate(subtract, req, res, "subtraction"));
app.get("/multiply", (req, res) => calculate(multiply, req, res, "multiplication"));
app.get("/divide", (req, res) => calculate(divide, req, res, "division"));
app.get("/power", (req, res) => calculate(power, req, res, "exponentiation"));
app.get("/sqrt", (req, res) => calculate(sqrt, req, res, "square root", true));
app.get("/modulo", (req, res) => calculate(modulo, req, res, "modulo"));

//connecting to the server
const port = 3040;
app.listen(port, () => {
  logger.info(`Server started on port ${port}`);
  console.log("Hello, I'm listening on port " + port);
});
