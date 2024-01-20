import joblib 
import torch 
import torch.nn as nn
import sys
import json


# Scale the new data
val = {'airQualityIndex': {'PM': '200', 'NO2': '120', 'SO2': '90', 'O3': '13', 'CO': '70'}, 'waterQualityIndex': {'PH': '7', 'TDS': '2', 'DO2': '4', 'BOD': '2', 'COD': '7'}, 'carbonGrowthRate': { 'previous': '10', 'next': '20'},  'cityName': 'Kathmandu', 'GreenArea': '10', 'RenewableEnergyUsage': '40', 'Temperature': '12', 'WasteWaterTreatment': '20', 'SolidWasteTreatment': '30'}

#algorithm

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


# val = {'cityName': 'dharan', 'airQualityIndex': {'PM': '122', 'NO2': '22', 'SO2': '11', 'O3': '33', 'CO': '3'}, 'waterQualityIndex': {'PH': '5', 'TDS': '4', 'DO2': '5', 'BOD': '3', 'COD': '2'}, 'carbonEmission': {'previous': '2', 'CO2EPC': '3', 'TCE': '1', 'next': '5'}, 'greenArea': '5', 'renewableEnergyResources': '5', 'temperature': '6'}

air_index = calc_air_Q(val['airQualityIndex'])
water_index = calc_water_Q(val['waterQualityIndex'])
co2_growth_rate = calc_co2_growth_rate(val['carbonGrowthRate'])





# Algorithm ends
scaler = joblib.load("scaler.joblib")
class NeuralNetwork(nn.Module):
    def __init__(self, input_size):
        super(NeuralNetwork, self).__init__()
        self.fc1 = nn.Linear(input_size, 10)
        # self.fc2 = nn.Linear(20,10)
        self.relu = nn.ReLU()
        self.fc3 = nn.Linear(10, 1)

    def forward(self, x):
        x = self.relu(self.fc1(x))
        # x = self.relu(self.fc2(x))
        x= self.fc3(x)
        return x
input_size = 8
loaded_nn_model = NeuralNetwork(input_size)
loaded_nn_model.load_state_dict(torch.load('neural_network_model.pth'))
loaded_nn_model.eval()  # Set the model to evaluation mode

new_data = torch.tensor([float(air_index),float(water_index),float(co2_growth_rate),float(val["GreenArea"]),float(val['RenewableEnergyUsage']),float(val["Temperature"]),float(val["WasteWaterTreatment"]),float(val["SolidWasteTreatment"])]).reshape(1,-1)
new_data_scaled = scaler.transform(new_data)
# Convert data to PyTorch tensor
new_data_tensor = torch.tensor(new_data_scaled, dtype=torch.float32)
def predict(data):
        # Make prediction
    with torch.no_grad():
        nn_prediction_new_data = loaded_nn_model(new_data_tensor)
        print( nn_prediction_new_data.item())
predict(new_data_tensor)