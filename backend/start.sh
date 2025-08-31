#!/usr/bin/env bash
# start.sh

# Exit on error
set -o errexit  

# Install dependencies
pip install --upgrade pip
pip install -r requirements.txt

# Collect static files
python manage.py collectstatic --noinput

# Apply database migrations
python manage.py migrate

# Start server
gunicorn backend.wsgi:application --bind 0.0.0.0:8000
