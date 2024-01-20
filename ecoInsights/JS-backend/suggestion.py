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
    
    return {"category":category,"suggestions":suggestions}

print(evaluate_and_suggest(50))