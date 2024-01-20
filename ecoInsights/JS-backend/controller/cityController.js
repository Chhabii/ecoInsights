const City = require("../models/citiesDataModel");

const getCityDetails = async (req, res) => {
  try {
    const cityDetail = await City.findOne({ cityName: req.params.cityname });
    return res.status(200).send(cityDetail);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const saveData = async (req, res) => {
  try {
    const newcity = new City(req.body);
    await newcity.save();
    return res.status(200).send("city data saved !");
  } catch (error) {
    return res.status(400).send("city data saved failed!" + error);
  }
};

module.exports = { saveData,getCityDetails };
