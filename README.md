# 🏡 Horizonkeys

[![Build Status](https://img.shields.io/github/actions/workflow/status/<banju-che>/<[horizonkeys.git]>/ci.yml?branch=main)](https://github.com/<your-username>/<your-repo>/actions)
![Python](https://img.shields.io/badge/python-3.11-blue)
![Django](https://img.shields.io/badge/django-5.0-green)
![DRF](https://img.shields.io/badge/DRF-3.16-red)
![Docker](https://img.shields.io/badge/docker-ready-blue)
![GHCR](https://img.shields.io/badge/GHCR-packages-orange)
![Render](https://img.shields.io/badge/deployed%20on-Render-purple)

A full-stack real estate property management system built with **Django REST Framework**, containerized with **Docker**, published on **GitHub Container Registry (GHCR)**, and deployed using **Render** with CI/CD.  
Frontend UI designed in **Figma** and styled with **TailwindCSS**.  

---

## 🚀 Features

### 🔹 Backend
- Manage **Properties** (CRUD)  
- Manage **Leads/Inquiries**  
- JWT Authentication   
- Search, filter, and ordering for properties  
- Custom Django admin for managing data  

### 🔹 Frontend
- Responsive UI built with TailwindCSS  
- Designs prototyped in Figma  

### 🔹 DevOps
- **Dockerized** backend + database  
- **GHCR** for image registry  
- **CI/CD** pipeline with GitHub Actions  
- **Auto deployment** on Render  

---

## 🛠️ Tech Stack

- **Backend:** Django, Django REST Framework  
- **Database:** PostgreSQL (SQLite for local dev)  
- **Frontend:** TailwindCSS, Figma designs  
- **DevOps:** Docker, GitHub Actions, GHCR, Render  
- **Testing:** Django TestCase / DRF APITestCase  

---

## 📂 Project Structure

project-root/
│── properties/ # Property app (models, serializers, views, tests)
│── leads/ # Leads app (models, serializers, views, tests)
│── config/ # Django project settings
│── requirements.txt # Python dependencies
│── docker-compose.yml
│── Dockerfile
│── .github/workflows # CI/CD pipelines
│── README.md

🚀 Getting Started
1️⃣ Clone Repository
git clone https://github.com/banju-che/horizonkeys.git
cd horizonkeys

2️⃣ Environment Variables

Create a .env file (or copy .env.example) and configure:

SECRET_KEY=your-django-secret
DEBUG=True
DATABASE_URL=postgres://user:password@db:5432/dbname
ALLOWED_HOSTS=localhost,127.0.0.1

🐳 Run with Docker
docker-compose up --build

📦 Using GHCR Images

This project is also published on GitHub Container Registry (GHCR).

Backend image:
docker pull ghcr.io/juliusgacheru/horizonkeys-backend:latest
docker run -p 8000:8000 ghcr.io/juliusgacheru/horizonkeys-backend:latest

Nginx image:
docker pull ghcr.io/juliusgacheru/horizonkeys-nginx:latest
docker run -p 80:80 ghcr.io/juliusgacheru/horizonkeys-nginx:latest

⚡ CI/CD Pipeline

This project uses GitHub Actions for Continuous Integration & Deployment:

CI (Continuous Integration)

Runs tests (pytest & Django tests) on every push and pull request.

Ensures code quality and prevents breaking changes.

CD (Continuous Deployment)

Builds Docker images for both backend and Nginx.

Pushes images to GitHub Container Registry (GHCR):

ghcr.io/juliusgacheru/horizonkeys-backend:latest

ghcr.io/juliusgacheru/horizonkeys-nginx:latest

Render automatically pulls the latest images and deploys them live.

📄 Workflow file: .github/workflows/deploy.yml

🧪 Running Tests
# Django built-in tests
python manage.py test

# Or with pytest
pytest

🔗 API Endpoints
Properties

GET /properties/ → list all properties

POST /properties/ → create property

GET /properties/<id>/ → retrieve property

PUT /properties/<id>/ → update property

DELETE /properties/<id>/ → delete property

Leads

GET /leads/ → list all leads

POST /leads/ → create lead

GET /leads/<id>/ → retrieve lead

PUT /leads/<id>/ → update lead

DELETE /leads/<id>/ → delete lead

📸 Screenshots

Add screenshots or GIFs once your Tailwind frontend is ready.
Examples:

Property list page

Property detail page

Lead submission form

📖 Documentation

API docs available at /swagger/ or /redoc/ (if enabled).

Database schema diagram: (add ERD here if available)

🚀 Deployment

🔗 Live Demo on Render → https://horizonkeys-1.onrender.com

🐳 Docker Images on GHCR →

Backend: ghcr.io/juliusgacheru/horizonkeys-backend:latest

Nginx: ghcr.io/juliusgacheru/horizonkeys-nginx:latest

👤 Author

Julius Gacheru

💼 LinkedIn

💻 GitHub

🌐 Portfolio
