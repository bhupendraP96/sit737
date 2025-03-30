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

// if (process.env.NODE_ENV !== "production") {
//   logger.add(
//     new winston.transports.Console({
//       format: winston.format.simple(),
//     })
//   );
// }

// functions for performing the mathematical operations
const add = (n1, n2) => n1 + n2;
const subtract = (n1, n2) => n1 - n2;
const multiply = (n1, n2) => n1 * n2;
const divide = (n1, n2) => {
  if (n2 === 0) {
    throw new Error("Cannot divide by zero");
  }
  return n1 / n2;
};

// handling operations
const calculate = (operation, req, res, operationType) => {
  try {
    const n1 = parseFloat(req.query.n1);
    const n2 = parseFloat(req.query.n2);

    if (isNaN(n1)) throw new Error("n1 incorrectly defined");
    if (isNaN(n2)) throw new Error("n2 incorrectly defined");
    if (n1 === NaN || n2 === NaN) {
      throw new Error("Parsing Error");
    }
    const result = operation(n1, n2);

    //logging info
    logger.info({
      operation: operationType,
      n1,
      n2,
      result,
      timestamp: new Date().toISOString(),
    });

    res.status(200).json({ statusCode: 200, data: result });
  } catch (error) {
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

const port = 3040;
app.listen(port, () => {
  logger.info(`Server started on port ${port}`);
  console.log("Hello, I'm listening on port " + port);
});
