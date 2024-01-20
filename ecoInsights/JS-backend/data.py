import numpy as np
import pandas as pd

# Set a random seed for reproducibility
np.random.seed(42)

# Number of data points
num_samples = 1000
# 
# for poor city 
# def generate_for_very_poor_city(num_samples):
    # data = []
    # for i in range(num_samples):
        # air_index_quality = np.random.randint(201,300)
# 
        # water_index_quality = np.random.randint(0,19)
        # 
        # co2_growth_rate = np.random.randint(10,20)
# 
# 
        # green_Areas = np.random.randint(5,10)
        # 
        # rewnewable_energy_usage = np.random.randint(5,10)
        # 
        # temperature = np.random.randint(-5,5) if i%2==0 else np.random.randint(35,40)
        # 
        # waste_water_treatment = np.random.randint(5,15)
# 
        # solid_waste_treatment = np.random.randint(5,20)
# 
# 
        # environmental_health_score = np.random.randint(0,20)
# 
        # data.append({
# 
            # 'Air_Quality_Index': air_index_quality,
            # 'Water_Quality_Index':water_index_quality,
            # 'CO2_Growth_Rate': co2_growth_rate,
            # 'Green_Areas': green_Areas,
            # 'Renewable_Energy_Usage': rewnewable_energy_usage,
            # 'Temperature': temperature,
            # 'Environmental_Health_Score': environmental_health_score 
            # })
    # df = pd.DataFrame(data)
    # df.to_csv("poor.csv", index=False)
    # return df 
# generate_for_poor_city(num_samples)





# def generate_for_very_poor_city(num_samples):
#     data = []
#     for i in range(num_samples):
#         air_index_quality = np.random.randint(201,300)

#         water_index_quality = np.random.randint(0,19)
        
#         co2_growth_rate = np.random.randint(10,20)


#         green_Areas = np.random.randint(5,10)
        
#         rewnewable_energy_usage = np.random.randint(5,10)
        
#         temperature = np.random.randint(-5,5) if i%2==0 else np.random.randint(35,40)
        
#         waste_water_treatment = np.random.randint(5,15)

#         solid_waste_treatment = np.random.randint(5,20)


#         environmental_health_score = np.random.randint(0,20)

#         data.append({

#             'Air_Quality_Index': air_index_quality,
#             'Water_Quality_Index':water_index_quality,
#             'CO2_Growth_Rate': co2_growth_rate,
#             'Green_Areas': green_Areas,
#             'Renewable_Energy_Usage': rewnewable_energy_usage,
#             'Temperature': temperature,
#             'waste_water_treatment':waste_water_treatment,
#             'solid_waste_treatment': solid_waste_treatment,
#             'Environmental_Health_Score': environmental_health_score 
#             })
#     df = pd.DataFrame(data)
#     df.to_csv("./datasets/_very_poor.csv", index=False)
#     return df 
# generate_for_very_poor_city(num_samples)




# def generate_for_poor_city(num_samples):
#     data = []
#     for i in range(num_samples):
#         air_index_quality = np.random.randint(151,200)

#         water_index_quality = np.random.randint(20,39)
        
#         co2_growth_rate = np.random.randint(5,10)


#         green_Areas = np.random.randint(10,20)
        
#         rewnewable_energy_usage = np.random.randint(10,20)
        
#         temperature = np.random.randint(5,10) if i%2==0 else np.random.randint(30,35)
        
#         waste_water_treatment = np.random.randint(15,40)

#         solid_waste_treatment = np.random.randint(20,40)


#         environmental_health_score = np.random.randint(20,40)

#         data.append({

#             'Air_Quality_Index': air_index_quality,
#             'Water_Quality_Index':water_index_quality,
#             'CO2_Growth_Rate': co2_growth_rate,
#             'Green_Areas': green_Areas,
#             'Renewable_Energy_Usage': rewnewable_energy_usage,
#             'Temperature': temperature,
#             'waste_water_treatment':waste_water_treatment,
#             'solid_waste_treatment': solid_waste_treatment,
#             'Environmental_Health_Score': environmental_health_score 
#             })
#     df = pd.DataFrame(data)
#     df.to_csv("./datasets/_poor.csv", index=False)
#     return df 
# generate_for_poor_city(num_samples)



# # 
# # 
# def generate_for_fair_city(num_samples):
#     data = []
#     for i in range(num_samples):
#         air_index_quality = np.random.randint(101,150)
# # 
#         water_index_quality = np.random.randint(40,59)
#         # 
#         co2_growth_rate = np.random.randint(0,5)
# # 
# # 
#         green_Areas = np.random.randint(20,40)
#         # 
#         rewnewable_energy_usage = np.random.randint(20,40)
#         # 
#         temperature = np.random.randint(10,15) if i%2==0 else np.random.randint(25,30)
#         # 
#         waste_water_treatment = np.random.randint(40,70)
# # 
#         solid_waste_treatment = np.random.randint(40,60)
# # 
# # 
#         environmental_health_score = np.random.randint(40,60)
# # 
#         data.append({
# # 
#             'Air_Quality_Index': air_index_quality,
#             'Water_Quality_Index':water_index_quality,
#             'CO2_Growth_Rate': co2_growth_rate,
#             'Green_Areas': green_Areas,
#             'Renewable_Energy_Usage': rewnewable_energy_usage,
#             'Temperature': temperature,
#             'waste_water_treatment':waste_water_treatment,
#             'solid_waste_treatment': solid_waste_treatment,
#             'Environmental_Health_Score': environmental_health_score 
#             })
#     df = pd.DataFrame(data)
#     df.to_csv("./datasets/_fair.csv", index=False)
#     return df 
# generate_for_fair_city(num_samples)
# 





# # 
# def generate_for_good_city(num_samples):
#     data = []
#     for i in range(num_samples):
#         air_index_quality = np.random.randint(51,100)
# # 
#         water_index_quality = np.random.randint(60,79)
#         # 
#         co2_growth_rate = np.random.randint(-5,0)
# # 
# # 
#         green_Areas = np.random.randint(40,60)
#         # 
#         rewnewable_energy_usage = np.random.randint(40,60)
#         # 
#         temperature = np.random.randint(15,20) if i%2==0 else np.random.randint(20,25)
#         # 
#         waste_water_treatment = np.random.randint(70,80)
# # 
#         solid_waste_treatment = np.random.randint(60,80)
# # 
# # 
#         environmental_health_score = np.random.randint(60,80)
# # 
#         data.append({
# # 
#             'Air_Quality_Index': air_index_quality,
#             'Water_Quality_Index':water_index_quality,
#             'CO2_Growth_Rate': co2_growth_rate,
#             'Green_Areas': green_Areas,
#             'Renewable_Energy_Usage': rewnewable_energy_usage,
#             'Temperature': temperature,
#             'waste_water_treatment':waste_water_treatment,
#             'solid_waste_treatment': solid_waste_treatment,
#             'Environmental_Health_Score': environmental_health_score 
#             })
#     df = pd.DataFrame(data)
#     df.to_csv("./datasets/_good.csv", index=False)
#     return df 
# generate_for_good_city(num_samples)


# # # 
# def generate_for_excellent_city(num_samples):
#     data = []
#     for i in range(num_samples):
#         air_index_quality = np.random.randint(0,50)
# # 
#         water_index_quality = np.random.randint(80,100)
#         # 
#         co2_growth_rate = np.random.randint(-10,-5)
# # 
# # 
#         green_Areas = np.random.randint(60,80)
#         # 
#         rewnewable_energy_usage = np.random.randint(60,80)
#         # 
#         temperature = np.random.randint(30,35) 
#         # 
#         waste_water_treatment = np.random.randint(90,100)
# # 
#         solid_waste_treatment = np.random.randint(80,100)
# # 
# # 
#         environmental_health_score = np.random.randint(80,100)
# # 
#         data.append({
# # 
#             'Air_Quality_Index': air_index_quality,
#             'Water_Quality_Index':water_index_quality,
#             'CO2_Growth_Rate': co2_growth_rate,
#             'Green_Areas': green_Areas,
#             'Renewable_Energy_Usage': rewnewable_energy_usage,
#             'Temperature': temperature,
#             'waste_water_treatment':waste_water_treatment,
#             'solid_waste_treatment': solid_waste_treatment,
#             'Environmental_Health_Score': environmental_health_score 
#             })
#     df = pd.DataFrame(data)
#     df.to_csv("./datasets/_excellent.csv", index=False)
#     return df 
# generate_for_excellent_city(num_samples)


# def generate_for_good_city(num_samples):
#     data = []
#     for i in range(num_samples):
#         air_index_quality = np.random.randint(101,200)
#         water_index_quality = np.random.randint(50,100)
#         co2_growth_rate = np.random.randint(5,10)


#         green_Areas = np.random.randint(25,35)
        

#         rewnewable_energy_usage = np.random.randint(20,50)
        
#         temperature = np.random.randint(5,20) 
        
#         environmental_health_score = "good"

#         data.append({

#             'Air_Quality_Index': air_index_quality,
#             'Water_Quality_Index':water_index_quality,
#             'CO2_Growth_Rate': co2_growth_rate,
#             'Green_Areas': green_Areas,
#             'Renewable_Energy_Usage': rewnewable_energy_usage,
#             'Temperature': temperature,
#             'Environmental_Health_Score': environmental_health_score 
#             })
#     df = pd.DataFrame(data)
#     df.to_csv("good.csv", index=False)
#     return df 
# generate_for_good_city(num_samples)



# def generate_for_excellent_city(num_samples):
#     data = []
#     for i in range(num_samples):
#         air_index_quality = np.random.randint(0,100)
#         water_index_quality = np.random.randint(0,50)
#         co2_growth_rate = np.random.randint(0,5)


#         green_Areas = np.random.randint(35,60)
        

#         rewnewable_energy_usage = np.random.randint(50,100)
        
#         temperature = np.random.randint(20,30) 
        
#         environmental_health_score = "excellent"

#         data.append({

#             'Air_Quality_Index': air_index_quality,
#             'Water_Quality_Index':water_index_quality,
#             'CO2_Growth_Rate': co2_growth_rate,
#             'Green_Areas': green_Areas,
#             'Renewable_Energy_Usage': rewnewable_energy_usage,
#             'Temperature': temperature,
#             'Environmental_Health_Score': environmental_health_score 
#             })
#     df = pd.DataFrame(data)
#     df.to_csv("excellent.csv", index=False)
#     return df 
# generate_for_excellent_city(num_samples)



def generate_for_mix_city(num_samples):
    data = []
    for i in range(num_samples):
        air_index_quality = np.random.randint(0,300)
        water_index_quality = np.random.randint(0,100)
        co2_growth_rate = np.random.randint(-10,20)


        green_Areas = np.random.randint(0,80)
        

        rewnewable_energy_usage = np.random.randint(0,100)
        
        temperature = np.random.randint(-15,40) 

        waste_water_treatment = np.random.randint(5,100)
# 
        solid_waste_treatment = np.random.randint(5,100)
        
        environmental_health_score = np.random.randint(0,100)
        
        data.append({
# 
            'Air_Quality_Index': air_index_quality,
            'Water_Quality_Index':water_index_quality,
            'CO2_Growth_Rate': co2_growth_rate,
            'Green_Areas': green_Areas,
            'Renewable_Energy_Usage': rewnewable_energy_usage,
            'Temperature': temperature,
            'waste_water_treatment':waste_water_treatment,
            'solid_waste_treatment': solid_waste_treatment,
            'Environmental_Health_Score': environmental_health_score 
        })



    df = pd.DataFrame(data)
    df.to_csv("./datasets/mix.csv", index=False)
    return df 
generate_for_mix_city(num_samples)



