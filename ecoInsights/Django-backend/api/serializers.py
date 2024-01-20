from rest_framework import serializers

class UserQuestionSerializer(serializers.Serializer):
    user_msg = serializers.CharField(max_length=255)

class FineTunedModelQuestionSerializer(serializers.Serializer):
    user_msg = serializers.CharField(max_length=512)
    