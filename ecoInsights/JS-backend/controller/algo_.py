import sys
import json

def calc_air_Q(value):
    # pm2_5 = 50
    # # N02 = 40
    # # S02 = 60
    # # O3 = 30
    # # CO = 23 
    Air_Quality_Index = max([value['PM'],value['NO2'],value['SO2'],value['O3'],value['CO']])
    return Air_Quality_Index
# print(Air_Quality_Index)



# For water quality Index
def calc_water_Q(value):
    # pH = 6.8 #api through
    pH_w = 0.25  
    pH_s = 7.0
    # ph_index calc
    pH_index = (float(value['PH'])/pH_s)*100
    # print(pH_index)

    # Actual_TDS = 200
    std_TDS = 150
    w_TDS = 0.2

    TDS_index = (float(value['TDS'])/std_TDS)*100
    # print(TDS_index)

    # dO2_actual = 8
    dO2_std = 9
    dO2_w = 0.25

    dO2_index = (float(value['DO2'])/dO2_std)*100
    # print(dO2_index)

    # bod_actual = 4
    bod_std = 3
    bod_w = 0.15

    bod_index = (float(value['BOD'])/bod_std)*100
    # print(bod_index)

    # cod_actual = 10
    cod_std = 8 
    cod_w = 0.15 

    cod_index = (float(value['COD'])/cod_std)*100
    # print(cod_index)

    #calc of water quality index
    water_index_quality =( pH_index*pH_w)+(TDS_index*w_TDS)+(dO2_index*dO2_w)+(bod_index*bod_w)+(cod_index*cod_w)

    # print(water_index_quality)
    return water_index_quality

def calc_co2_growth_rate(value):
    return (float(value['next'])-float(value['previous']))/float(value['previous'])
    

image = "./dharan.tif"
def calc_green_areas(image):
    percent = 40
    return int(percent)


def rewnewable_energy_usage():
    Renewable_Energy_Usage = 20
    return Renewable_Energy_Usage

def temperature():
    temp = 24
    return  temp 

import joblib
import numpy as np

model = joblib.load("model.joblib")

+

# val = {'cityName': 'dharan', 'airQualityIndex': {'PM': '122', 'NO2': '22', 'SO2': '11', 'O3': '33', 'CO': '3'}, 'waterQualityIndex': {'PH': '5', 'TDS': '4', 'DO2': '5', 'BOD': '3', 'COD': '2'}, 'carbonEmission': {'previous': '2', 'CO2EPC': '3', 'TCE': '1', 'next': '5'}, 'greenArea': '5', 'renewableEnergyResources': '5', 'temperature': '6'}

air_index = calc_air_Q(val['airQualityIndex'])
water_index = calc_water_Q(val['waterQualityIndex'])
co2_growth_rate = calc_co2_growth_rate(val['carbonEmission'])
# print(co2_growth_rate)


def cal_environmental_health_score():
    a = air_index
    w = water_index
    c = co2_growth_rate
    g = val['greenArea']
    r = val['renewableEnergyResources']
    t = val['temperature']

    output = model.predict(np.array([a,w,c,g,r,t]).reshape(1,-1))

    return output
print(cal_environmental_health_score())