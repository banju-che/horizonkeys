# 🏡 Horizonkeys

[![Build Status](https://img.shields.io/github/actions/workflow/status/banju-che/horizonkeys/ci.yml?branch=main)](https://github.com/banju-che/horizonkeys/actions)
![Python](https://img.shields.io/badge/python-3.11-blue)
![Django](https://img.shields.io/badge/django-5.0-green)
![DRF](https://img.shields.io/badge/DRF-3.16-red)
![Docker](https://img.shields.io/badge/docker-ready-blue)
![GHCR](https://img.shields.io/badge/GHCR-packages-orange)
![Render](https://img.shields.io/badge/deployed%20on-Render-purple)

---

A full-stack **real estate property management system** built with:

- **Django REST Framework** (backend)
- Containerized via **Docker**
- Images published to **GitHub Container Registry (GHCR)**
- Deployed on **Render**
- **Frontend UI** designed in **Figma** & styled with **TailwindCSS**

---

## 🚀 Features

<details>
  <summary>🔹 <strong>Backend</strong></summary>

  - Manage <strong>Properties</strong> (CRUD)
  - Manage <strong>Leads/Inquiries</strong>
  - JWT Authentication
  - Search, filter, and order properties
  - Custom Django admin for data management
</details>

<details>
  <summary>🔹 <strong>Frontend</strong></summary>

  - Responsive UI with TailwindCSS
  - Designs prototyped in Figma
</details>

<details>
  <summary>🔹 <strong>DevOps</strong></summary>

  - Dockerized backend & database
  - Images published to GHCR
  - CI/CD pipeline via GitHub Actions
  - Auto deployment on Render
</details>

---

## 🛠️ Tech Stack

| Layer     | Technology                         |
|-----------|------------------------------------|
| Backend   | Django, Django REST Framework      |
| Database  | PostgreSQL (SQLite for local dev)  |
| Frontend  | TailwindCSS, Figma designs         |
| DevOps    | Docker, GitHub Actions, GHCR, Render |
| Testing   | Django TestCase / DRF APITestCase  |

---

## 📂 Project Structure

```
project-root/
│
├── properties/         # Property app (models, serializers, views, tests)
├── leads/              # Leads app (models, serializers, views, tests)
├── config/             # Django project settings
├── requirements.txt    # Python dependencies
├── docker-compose.yml
├── Dockerfile
├── .github/workflows/  # CI/CD pipelines
└── README.md
```

---

## ⚡ Getting Started

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/banju-che/horizonkeys.git
cd horizonkeys
```

### 2️⃣ Configure Environment Variables

Create a `.env` file (or copy `.env.example`) and set:

```
SECRET_KEY=your-django-secret
DEBUG=True
DATABASE_URL=postgres://user:password@db:5432/dbname
ALLOWED_HOSTS=localhost,127.0.0.1
```

### 🐳 Run with Docker
```sh
docker-compose up --build
```

---

## 📦 Using GHCR Images

This project is published on GitHub Container Registry (GHCR).

**Backend image:**
```sh
docker pull ghcr.io/juliusgacheru/horizonkeys-backend:latest
docker run -p 8000:8000 ghcr.io/juliusgacheru/horizonkeys-backend:latest
```

**Nginx image:**
```sh
docker pull ghcr.io/juliusgacheru/horizonkeys-nginx:latest
docker run -p 80:80 ghcr.io/juliusgacheru/horizonkeys-nginx:latest
```

---

## ⚡ CI/CD Pipeline

- GitHub Actions for continuous integration & deployment
- Workflow file: `.github/workflows/deploy.yml`

**CI:**  
Runs tests (`pytest` & Django tests) on every push & PR to maintain code quality.

**CD:**  
Builds & pushes Docker images to GHCR.  
Render auto-deploys the latest images.

---

## 🧪 Running Tests

```sh
# Django built-in tests
python manage.py test

# Or with pytest
pytest
```

---

## 🔗 API Endpoints

### Properties

| Method | Endpoint             | Description        |
|--------|----------------------|-------------------|
| GET    | `/properties/`       | List all properties |
| POST   | `/properties/`       | Create property     |
| GET    | `/properties/<id>/`  | Retrieve property  |
| PUT    | `/properties/<id>/`  | Update property    |
| DELETE | `/properties/<id>/`  | Delete property    |

### Leads

| Method | Endpoint         | Description      |
|--------|------------------|-----------------|
| GET    | `/leads/`        | List all leads  |
| POST   | `/leads/`        | Create lead     |
| GET    | `/leads/<id>/`   | Retrieve lead   |
| PUT    | `/leads/<id>/`   | Update lead     |
| DELETE | `/leads/<id>/`   | Delete lead     |

---

## 📖 Documentation

- API docs: `/swagger/` or `/redoc/` (if enabled)
- Database schema diagram: *(add ERD here if available)*

---

## 📸 Screenshots

_Add screenshots or GIFs of your Tailwind frontend here!_

- Property list page
- Property detail page
- Lead submission form

---

## 🚀 Deployment

- 🔗 **Live Demo:** [Horizonkeys on Render](https://horizonkeys-1.onrender.com)
- 🐳 **Docker Images:**  
  - Backend: `ghcr.io/juliusgacheru/horizonkeys-backend:latest`  
  - Nginx: `ghcr.io/juliusgacheru/horizonkeys-nginx:latest`

---

## 👤 Author

**Julius Gacheru**  
[LinkedIn](#) | [GitHub](#) | [Portfolio](#)

---
