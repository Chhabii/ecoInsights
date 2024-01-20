# myapp/views.py
import os 

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view

from rest_framework import status
from .serializers import UserQuestionSerializer ,FineTunedModelQuestionSerializer # Import your serializer
from openai import OpenAI




# client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
client = OpenAI(api_key="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")

@api_view(["POST"])
def ChatAPIView(request):
    if request.method == "POST":
        serializer = UserQuestionSerializer(data=request.data)
        if serializer.is_valid():
            user_msg = serializer.validated_data['user_msg']
            system_msg = "You are a Sustainable Development Goals (SDG) Explanation Assistant commissioned by the United Nations. The user is seeking information or guidance related to sustainable development issues. You possess knowledge on key indicators such as Air Quality Index, Water Quality Index, CO2 Emission Growth Rate, Temperature, Waste Water Treatment, and Solid Waste Treatment. Provide informative and actionable responses aligned with the SDGs." # Adjust prompt as needed

            response = client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": system_msg},
                    {"role": "user", "content": user_msg}
                ]
            )

            # Access answer content based on updated response structure
            try:
                # answer = response['message']['content']  # Assuming new structure
                print(response)
                answer = response.choices[0].message.content 
                
            except KeyError:
                # Handle potential errors or unexpected response formats
                return Response({'error': 'Failed to parse response'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

            return Response({'answer': answer}, status=status.HTTP_200_OK)

        # Handle serializer errors
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



from transformers import MT5ForConditionalGeneration,AutoTokenizer
import torch 

@api_view(["POST"])
def FineTunedQA(request):
    if request.method == "POST":
        serializer = FineTunedModelQuestionSerializer(data=request.data)
        if serializer.is_valid():
            user_msg = serializer.validated_data['user_msg']

            model = MT5ForConditionalGeneration.from_pretrained("Chhabi/mt5-small-finetuned-Nepali-Health-50k-2")
            tokenizer = AutoTokenizer.from_pretrained("Chhabi/mt5-small-finetuned-Nepali-Health-50k-2", use_fast=True)

            # Move the model to GPU if available
            device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
            model = model.to(device)

            # Generate response
            user_msg = "Answer: " + user_msg 
            
            inputs = tokenizer(user_msg, return_tensors='pt', max_length=128, truncation=True).to(device)
            generated_text = model.generate(**inputs, max_length=128, min_length=64, length_penalty=4.0, num_beams=9,
                                             top_p=0.95, top_k=100, do_sample=True, temperature=0.7,
                                             num_return_sequences=3, no_repeat_ngram_size=3)
            generated_response = tokenizer.batch_decode(generated_text, skip_special_tokens=True)[0]
            tokens = generated_response.split(" ")
            filtered_tokens = [token for token in tokens if not token.startswith("<extra_id_")]
            answer = ' '.join(filtered_tokens)

            return Response({'answer': answer}, status=status.HTTP_200_OK)

        # Handle serializer errors
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)