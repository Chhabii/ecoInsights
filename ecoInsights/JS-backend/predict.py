import joblib 
import torch 
import torch.nn as nn
import sys
import json


# Scale the new data
message = sys.stdin.readline().rstrip()
val = json.loads(message)

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

def evaluate_and_suggest(nn_prediction):
    very_poor_threshold = 20
    poor_threshold = 40
    fair_threshold = 60
    good_threshold = 80 
    excellent_threshold = 100

    if nn_prediction < very_poor_threshold:
        category = "very_poor"
    elif nn_prediction<poor_threshold and nn_prediction>=very_poor_threshold:
        category = "poor"
    elif nn_prediction<fair_threshold and nn_prediction>=poor_threshold:
        category = "fair"
    elif nn_prediction<good_threshold and nn_prediction>=fair_threshold:
        category = "good"
    elif nn_prediction<excellent_threshold and nn_prediction>=good_threshold:
        category = "excellent"
    else: 
        category = "None"

    suggestions = ""

    if category == "very_poor":
        suggestions = "The environmental health score is very low, indicating critical issues across various parameters. Air quality is severely compromised, with high levels of pollutants like PM2.5, NO2, and CO. Water quality faces significant challenges, including low pH and high levels of contaminants. Carbon emissions are alarmingly high, impacting both air and overall environmental health. There is a lack of green areas, renewable energy usage, and inadequate waste management. Urgent interventions are needed to address these issues comprehensively."
    elif category == "poor":
       suggestions = "The environmental health score is below optimal levels, suggesting notable concerns. Air quality may have elevated levels of pollutants, emphasizing the need for emission control and cleaner energy sources. Water quality could be improved by implementing better waste disposal practices and reducing pollution sources. Efforts to decrease carbon emissions, enhance green areas, and optimize waste management are crucial for progress."
    elif category == "fair":
        suggestions = "The environmental health score indicates moderate conditions. While not alarming, there is room for improvement. Monitoring and controlling air pollutants, implementing sustainable water management practices, and promoting renewable energy usage can contribute to a healthier environment. Initiatives to enhance green spaces and community engagement are valuable for sustained improvements."
    elif category == "good":
        suggestions = "The environmental health score is at a satisfactory level, indicating relatively healthy conditions. Air and water quality are within recommended limits, and carbon emissions are controlled. Maintaining and expanding green areas, optimizing energy usage, and sustaining effective waste management practices contribute to a positive environmental impact."
    elif category == "excellent":
        suggestions = "The environmental health score is excellent, reflecting a pristine environment. Air and water quality are exceptional, with minimal pollutants. Carbon emissions are well-managed, and there are ample green spaces. Continued efforts to sustain these conditions, along with community engagement in environmental conservation, contribute to an exemplary environmental health score."
    return {"category":category,"suggestions":suggestions, "score":nn_prediction }



def predict(data):
        # Make prediction
    with torch.no_grad():
        nn_prediction_new_data = loaded_nn_model(new_data_tensor)
        # evaluate_and_suggest( nn_prediction_new_data.item())
        print(evaluate_and_suggest( nn_prediction_new_data.item()))
predict(new_data_tensor)

