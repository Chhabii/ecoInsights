const mongoose = require("mongoose");

const citySchema = mongoose.Schema({
  cityName: {
    type: String,
    required: true,
  },
  airQualityIndex: {
    PM: {
      type: String,
      required: true,
    },
    NO2: {
      type: String,
      required: true,
    },
    SO2: {
      type: String,
      required: true,
    },
    O3: {
      type: String,
      required: true,
    },
    CO: {
      type: String,
      required: true,
    },
  },
  waterQualityIndex: {
    PH: {
      type: String,
      required: true,
    },
    TDS: {
      type: String,
      required: true,
    },
    DO2: {
      type: String,
      required: true,
    },
    BOD: {
      type: String,
      required: true,
    },
    COD: {
      type: String,
      required: true,
    },
  },
  carbonGrowthRate: {
    previous: {
      type: String,
      required: true,
    },
    next: {
      type: String,
      required: true,
    },
  },
  GreenArea: {
    type: String,
    required: true,
  },
  RenewableEnergyUsage: {
    type: String,
    required: true,
  },
  Temperature: {
    type: String,
    required: true,
  },
  WasteWaterTreatment: {
    type: String,
    required: true,
  },
  SolidWasteTreatment: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("City", citySchema);
