# ========================
# Stage 1: Base Python Image
# ========================
FROM python:3.11-slim AS base

# Prevent Python from writing .pyc files & buffer logs
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

# Install system dependencies
RUN apt-get update && apt-get install -y \
    gcc \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Set workdir
WORKDIR /app

# ========================
# Stage 2: Install dependencies
# ========================
FROM base AS builder

# Copy only requirements first (to leverage caching)
COPY requirements.txt /app/

# Install Python dependencies
RUN pip install --upgrade pip \
    && pip install -r requirements.txt

# ========================
# Stage 3: Final runtime image
# ========================
FROM base

# Copy installed deps from builder
COPY --from=builder /usr/local /usr/local

# Copy Django project source code
COPY . /app/

# Expose Django default port
EXPOSE 8000

# Run Django dev server (override in docker-compose for production)
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
