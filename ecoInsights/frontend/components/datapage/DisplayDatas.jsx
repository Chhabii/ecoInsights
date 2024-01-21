import React, { useEffect, useState } from "react";
import DetailsPop from "./DetailsPop";
import { InfinitySpin } from "react-loader-spinner";

const DisplayDatas = ({ details, envScore, isLoading }) => {
  const [detailsObject, setdetailsObject] = useState([]);
  const [firstRender, setFirstRender] = useState(true);
  const [displayModal, setdisplayModal] = useState(false);

  const calculateAirQuality = (airq) => {
    let airIndex = Math.max(
      parseInt(airq.PM),
      parseInt(airq.NO2),
      parseInt(airq.SO2),
      parseInt(airq.O3),
      parseInt(airq.CO)
    );
    return airIndex;
  };
  const calculateWaterQuality = (waterq) => {
    let phIndex = (parseFloat(waterq.PH) / 7.0) * 100;
    let TDS = (parseFloat(waterq.TDS) / 150) * 100;
    let DO2 = (parseFloat(waterq.DO2) / 9) * 100;
    let BOD = (parseFloat(waterq.BOD) / 3) * 100;
    let COD = (parseFloat(waterq.COD) / 8) * 100;

    let waterQualityIndex =
      phIndex * 0.25 + TDS * 0.2 + DO2 * 0.25 + BOD * 0.15 + COD * 0.15;
    return waterQualityIndex.toFixed(2);
  };
  const calculateCarbonGrowthRate = (carbr) => {
    return (
      (parseFloat(carbr.next) - parseFloat(carbr.previous)) /
      parseFloat(carbr.previous)
    );
  };

  const checkColor = (key, value) => {
    let color;

    switch (key) {
      case "airQualityIndex":
        color =
          value > 200
            ? "bg-red-500"
            : value > 100
            ? "bg-yellow-400"
            : "bg-green-400";
        break;
      case "waterQualityIndex":
        color =
          value > 40
            ? "bg-red-500"
            : value > 80
            ? "bg-yellow-400"
            : "bg-green-400";
        break;
      case "carbonGrowthRate":
        color =
          value > 10
            ? "bg-red-500"
            : value >= 0 && value <= 10
            ? "bg-yellow-400"
            : "bg-green-400";
        break;
      case "RenewableEnergyUsage":
        color =
          value <= 20
            ? "bg-red-500"
            : value <= 40
            ? "bg-yellow-400"
            : "bg-green-400";
        break;
      case "GreenArea":
        color =
          value <= 20
            ? "bg-red-500"
            : value <= 40
            ? "bg-yellow-400"
            : "bg-green-400";
        break;
      case "EnvironmentIndex":
        color =
          value <= 40
            ? "bg-red-500"
            : value <= 75
            ? "bg-yellow-400"
            : "bg-green-400";
        break;
      case "Temperature":
        color =
          (value >= -15 && value <= 0) || (value >= 35 && value <= 50)
            ? "bg-red-500"
            : value >= 0 && value <= 25
            ? "bg-yellow-400"
            : "bg-green-400";
        break;
      case "WasteWaterTreatment":
        color =
          value <= 20
            ? "bg-red-500"
            : value <= 60
            ? "bg-yellow-400"
            : "bg-green-400";
        break;
      case "SolidWasteTreatment":
        color =
          value <= 20
            ? "bg-red-500"
            : value <= 60
            ? "bg-yellow-400"
            : "bg-green-400";
        break;
      default:
        // Handle the case where the key is not recognized
        color = "unknown";
    }

    return color;
  };

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      return;
    }

    const { _id, __v, cityName, ...newObj } = {
      ...details,
      airQualityIndex: calculateAirQuality(details.airQualityIndex),
      waterQualityIndex: calculateWaterQuality(details.waterQualityIndex),
      carbonGrowthRate: calculateCarbonGrowthRate(details.carbonGrowthRate),
    };
    setdetailsObject(newObj);
  }, [details]);

  return (
    <>
      {isLoading ? (
        <div className="h-[100vh] w-[100vw] flex justify-center items-center">
          <InfinitySpin
            visible={true}
            width="200"
            color="#4fa94d"
            ariaLabel="infinity-spin-loading"
          />
        </div>
      ) : (
        <div>
        {envScore ? (
          <div className="text-center mt-[2rem] text-[2rem] w-[100vw] flex justify-center">
            <div className="h-[14rem] w-[18rem] shadow-sm shadow-black relative grid grid-rows-3  cursor-pointer group">
              <div
                className={`${checkColor(
                  "EnvironmentIndex",
                  envScore.score.toFixed(2)
                )}  row-span-2 text-[2.3rem] font-semibold flex rounded-t justify-center items-center`}
              >
                {envScore.score.toFixed(2)}
              </div>
              <div className="bg-white text-black flex text-[1.2rem] rounded-b font-medium justify-center items-center">
                Environment Index
              </div>
            </div>
          </div>
        ) : null}
        <div className="w-[100%] flex justify-center">
          <div className="grid grid-cols-4 gap-[2rem] mt-[5rem] w-[80%] justify-between">
            {Object.keys(detailsObject).map((key, i) => {
              return (
                <div className="h-[14rem] shadow-sm shadow-black w-[18rem] relative grid grid-rows-3 rounded cursor-pointer group">
                  <div
                    className={`${checkColor(
                      key,
                      detailsObject[`${key}`]
                    )}  row-span-2  text-[2.3rem] font-semibold rounded-t flex justify-center items-center`}
                  >
                    {detailsObject[`${key}`]}
                  </div>
                  <div className=" bg-white text-black flex rounded-b text-[1.2rem] font-medium justify-center items-center">
                    {key}
                  </div>
                  {typeof details[`${key}`] === "object" ? (
                    <>
                      <div
                        onClick={() => {
                          setdisplayModal(true);
                        }}
                        className="  group-hover:grid-cols-2 hidden absolute h-[100%] w-[100%] bg-[#0606068c] group-hover:grid justify-center gap-4 items-center text-white text-[1.2rem] animate-slidein"
                      >
                        {Object.keys(details[`${key}`]).map((childkey, i) => {
                          return (
                            <div className="flex text-[1.1rem] m-auto">
                              <p>{childkey}</p> :{" "}
                              <p>{details[`${key}`][`${childkey}`]}</p>
                            </div>
                          );
                        })}
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                  {displayModal ? <DetailsPop /> : null}
                </div>
              );
            })}
            {/* {detailsArray.map((item) => {
          return (
            <div className="h-[14rem] w-[18rem] relative grid grid-rows-3 rounded cursor-pointer group">
              <div className="bg-green-200 row-span-2 text-[2.3rem] font-semibold rounded-b flex justify-center items-center">
                {item.value}
              </div>
              <div className="bg-green-400 rounded-b flex text-[1.2rem] font-medium justify-center items-center">
                {item.title}
              </div>
              <div className="hidden absolute h-[100%] w-[100%] bg-[#0606068c] group-hover:flex justify-center gap-4 items-center text-white text-[1.2rem] animate-slidein">
                <p> Check Details </p>
                <div>
                  <FaArrowRight />
                </div>
              </div>
            </div>
          );
        })} */}
          </div>
        </div>
      </div>
      )}

    </>
  );
};

export default DisplayDatas;
