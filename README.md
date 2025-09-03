# 🏡 Horizonkeys

[![Build Status](https://img.shields.io/github/actions/workflow/status/<your-username>/<your-repo>/ci.yml?branch=main)](https://github.com/<your-username>/<your-repo>/actions)
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

yaml
Copy code

---

## ⚙️ Installation & Setup

### 🔹 Clone repository
```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
🔹 Environment variables
Create a .env file (or use .env.example) with:

ini
Copy code
SECRET_KEY=your-django-secret
DEBUG=True
DATABASE_URL=postgres://user:password@db:5432/dbname
ALLOWED_HOSTS=localhost,127.0.0.1
🔹 Run with Docker
bash
Copy code
docker-compose up --build
🐳 Using GHCR Image
This project is published on GitHub Container Registry (GHCR).
You can pull the Docker image directly:

bash
Copy code
docker pull ghcr.io/<your-username>/<your-repo>:latest
docker run -p 8000:8000 ghcr.io/<your-username>/<your-repo>:latest
🧪 Running Tests
bash
Copy code
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

Database schema diagram:

🚀 Deployment
This project is deployed at:
🔗 Live Demo on Render

Docker Image available at:
🐳 GHCR Package

👤 Author
Julius Gacheru

💼 LinkedIn: www.linkedin.com/in/julius-gacheru-ba64b0345

💻 GitHub: https://github.com/banju-che

My Portfolio: https://portfolio-plum-omega-72.vercel.app/

