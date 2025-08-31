#!/bin/bash
# entrypoint.prod.sh

# Exit immediately if a command exits with a non-zero status
set -e

echo "Running migrations..."
python3 manage.py migrate

echo "Collecting static files..."
python3 manage.py collectstatic --noinput

echo "Starting Gunicorn..."
# Start Gunicorn on the port Render provides
exec gunicorn config.wsgi:application --bind 0.0.0.0:$PORT
