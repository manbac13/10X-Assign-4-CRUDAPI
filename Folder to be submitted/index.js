const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser());

app.get("/", (req, res) => {
    res.send("Hello World")
})

function checkUnderflow(num1, num2, result) {
    if (num1 < -1000000 || num2 < -1000000 || result < -1000000) {
        return true
    }
}    

function checkOverflow(num1, num2, result) {
    if (num1 > 1000000 || num2 > 1000000 || result > 100000) {
        return true
    }
}  

app.post("/add", (req, res) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    if ((isNaN(num1) || isNaN(num2))) {
        res.json({
            status : "error",
            message: "Invalid data type"
        })
    }
    else {
        let sum = Number(num1) + Number(num2);
        if (checkUnderflow(num1, num2, sum)) {
            result = {
                status : "error",
                message: "Underflow"
            }
            res.json(result)
        }
        if (checkOverflow(num1, num2, sum)) {
            result = {
                status : "error",
                message: "Overflow"
            }
            res.json(result)
        }
        res.status(200).json({
            status: "Success",
            message: "the sum of given two numbers",
            sum: sum
        })
    }

})

app.post("/sub", (req, res) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    if ((isNaN(num1) || isNaN(num2))) {
        res.json({
            status : "error",
            message: "Invalid data type"
        })
    }
    else {
        let diff = Number(num1) - Number(num2);
        if (checkUnderflow(num1, num2, diff)) {
            result = {
                status : "error",
                message: "Underflow"
            }
            res.json(result)
        }
        if (checkOverflow(num1, num2, diff)) {
            result = {
                status : "error",
                message: "Overflow"
            }
            res.json(result)
        }
        res.status(200).json({
            status: "Success",
            message:"the difference of given two numbers",
            diff: diff
        })
    }

})

app.post("/multiply", (req, res) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    if ((isNaN(num1) || isNaN(num2))) {
        res.json({
            status : "error",
            message: "Invalid data type"
        })
    }
    else {
        let product = Number(num1) * Number(num2);
        if (checkUnderflow(num1, num2, product)) {
            result = {
                status : "error",
                message: "Underflow"
            }
            res.json(result)
        }
        if (checkOverflow(num1, num2, product)) {
            result = {
                status : "error",
                message: "Overflow"
            }
            res.json(result)
        }
        res.status(200).json({
            status: "Success",
            message: "The product of given numbers",
            product: product
        })
    }

})

app.post("/divide", (req, res) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    if ((isNaN(num1) || isNaN(num2))) {
        res.json({
            status : "error",
            message: "Invalid data type"
        })
    }
    else {
        if (num2 === 0) {
            res.status(404).json({
                status : "error",
                message: "cannot divide by zero"
            })
        }
        else {
            let division = Number(num1) / Number(num2);
            if (checkUnderflow(num1, num2, division)) {
                result = {
                    status : "error",
                    message: "Underflow"
                }
                res.json(result)
            }
            if (checkOverflow(num1, num2, division)) {
                result = {
                    status : "error",
                    message: "Overflow"
                }
                res.json(result)
            }
            res.status(200).json({
                status: "Success",
                message:"The division of given numbers",
                division: division
            })
        }
    }

})

app.listen(5000, () => {
    console.log("Server up at port 5000")
})