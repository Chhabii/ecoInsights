const express = require("express");
const router = express.Router();
const { saveData,getCityDetails } = require("../controller/cityController")
const { getPrediction } = require("../controller/modelController")
const { addNewTask, registerUser,updateTaskStatus, getUser,updateReward} = require("../controller/userController")

router.get("/", (req,res) =>  {
    res.send("Successfull running!")
})

router.post("/savecitydata", saveData)
router.get("/getcitydetails/:cityname",  getCityDetails)

router.get("/getprediction/:cityname", getPrediction)

router.post("/registeruser", registerUser)
router.post("/addnewtask/:userId", addNewTask)
router.post("/updatetaskstatus/:userId", updateTaskStatus)
router.put("/updatereward/:userid", updateReward);
router.get('/getuser', getUser)

module.exports = router