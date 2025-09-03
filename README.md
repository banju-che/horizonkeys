# 🏡 Real Estate Property Management API

[![Build Status](https://img.shields.io/github/actions/workflow/status/<your-username>/<your-repo>/ci.yml?branch=main)](https://github.com/<your-username>/<your-repo>/actions)
![Python](https://img.shields.io/badge/python-3.11-blue)
![Django](https://img.shields.io/badge/django-5.0-green)
![DRF](https://img.shields.io/badge/DRF-3.16-red)
![Docker](https://img.shields.io/badge/docker-ready-blue)

A full-stack real estate property management system built with **Django REST Framework**, containerized with **Docker**, tested with **unittests/pytest**, and deployed using **CI/CD (GitHub Actions + Render)**.  
Frontend UI designed in **Figma** and styled with **TailwindCSS**.  

---

## 🚀 Features

### 🔹 Backend
- Manage **Properties** (CRUD)  
- Manage **Leads/Inquiries**  
- JWT Authentication (optional if added)  
- Search, filter, and ordering for properties  
- Custom Django admin for managing data  

### 🔹 Frontend
- Responsive UI built with TailwindCSS  
- Designs prototyped in Figma  

### 🔹 DevOps
- Dockerized (backend + database)  
- CI/CD pipeline with GitHub Actions  
- Auto deployment on Render  

---

## 🛠️ Tech Stack

- **Backend:** Django, Django REST Framework  
- **Database:** PostgreSQL (SQLite for local dev)  
- **Frontend:** TailwindCSS, Figma designs  
- **DevOps:** Docker, GitHub Actions, Render  
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
🔗 Live Demo

👤 Author
Julius Gacheru

💼 LinkedIn

💻 GitHub

