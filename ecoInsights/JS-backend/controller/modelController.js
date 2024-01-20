const { PythonShell } = require("python-shell");
const City = require("../models/citiesDataModel");

const getPrediction = async (req, res) => {
  try {
    const cityDetail = await City.findOne({ cityName: req.params.cityname });
    let toSend = JSON.stringify(cityDetail);
    let pyshell = new PythonShell("predict.py");
    await pyshell.send(toSend);

    pyshell.on("message", function (message) {
      const validJsonString = message.replace(/'/g, '"');
      const result = JSON.parse(validJsonString);
      return res.status(200).send(result);
    });

    await new Promise((resolve, reject) => {
      pyshell.end(function (err, code, signal) {
        if (err) {
          console.error("Error:", err);
          reject(err);
        } else {
          resolve();
        }
      });
    });
  } catch (err) {
    console.error("Error:", err);
    console.log("Error occurred");
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { getPrediction };
