const express = require("express");
const { addTransaction, getAllTransaction,editTransaction,deleteTransaction } = require("../controllers/transactionCtrl");

//router object
const router = express.Router();


//routers
//add transaction POST Method
router.post("/add-transaction", addTransaction)
   
//add transaction POST Method
router.post("/edit-transaction", editTransaction)

//add transaction POST Method
router.post("/delete-transaction", deleteTransaction)

//get transaction POST Method
router.post("/get-transaction", getAllTransaction)


module.exports = router;
