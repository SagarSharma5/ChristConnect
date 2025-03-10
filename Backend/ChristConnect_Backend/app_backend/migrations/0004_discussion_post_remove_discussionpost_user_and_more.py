# Generated by Django 5.1.1 on 2024-09-24 20:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_backend', '0003_discussionpost'),
    ]

    operations = [
        migrations.CreateModel(
            name='Discussion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.CharField(max_length=255)),
                ('user_designation', models.CharField(max_length=50)),
                ('title', models.CharField(max_length=255)),
                ('content', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.CharField(max_length=255)),
                ('user_designation', models.CharField(max_length=50)),
                ('post_text', models.TextField()),
                ('post_image', models.ImageField(blank=True, null=True, upload_to='post_images/')),
            ],
        ),
        migrations.RemoveField(
            model_name='discussionpost',
            name='user',
        ),
        migrations.DeleteModel(
            name='post_table',
        ),
        migrations.DeleteModel(
            name='DiscussionPost',
        ),
    ]
