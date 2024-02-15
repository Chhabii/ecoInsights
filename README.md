# Environmental Health Score Predictor

This repository contains code for predicting Environmental Health Scores using neural networks. The predictor utilizes various environmental factors such as air quality index, water quality index, CO2 growth rate, green areas, renewable energy usage, temperature, waste water treatment, and solid waste treatment.

## Usage

1. **Preprocessing:** Before running the model, preprocess the data using the provided preprocessing code.
2. **Model Training:** Train the neural network model using the provided training code.
3. **Evaluation:** Evaluate the trained model's performance using the provided evaluation code.
4. **Inference:** Make predictions using the trained model for new data samples.

## Dependencies

- Python 3.x
- PyTorch
- scikit-learn
- pandas
- matplotlib

## Dataset

The dataset used for training and evaluation is provided in the `datasets` directory.

## Files

- `nn.ipynb`: Code for training the neural network model.
- `predict.py`: Code for prediction of new data.
- `neural_network_model.pth`: Pre-trained neural network model.
- `scaler.joblib`: Pre-trained scaler for feature scaling.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
