from rest_framework import serializers
from app_backend.models import post_table

class post_tableSerializer(serializers.ModelSerializer):
    class Meta:
        model = post_table
        fields = ('post_id',
                  'user_id',
                  'post_text',
                  'post_image')