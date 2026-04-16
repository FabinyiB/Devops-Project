# 🚀 DevOps CI/CD Demo Project

[![CI](https://github.com/FabinyiB/Devops-Project/actions/workflows/ci.yml/badge.svg)](https://github.com/FabinyiB/Devops-Project/actions)

[![Docker Hub](https://img.shields.io/badge/Docker%20Hub-fabinyib%2Fhello--world--app-blue)](https://hub.docker.com/repository/docker/fabinyib/hello-world-app/general)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Render-green)](https://hello-world-app-amos.onrender.com)

## 📌 Overview
This project demonstrates a **complete CI/CD pipeline** integrating automated testing, containerization, artifact publishing, and cloud deployment.

On every push to the repository:

```
Code push → GitHub Actions → Cypress tests → Docker image build → Docker Hub publish → Render auto-deploy
```

The application is automatically redeployed to a live cloud environment after successful tests.

---

## 🌐 Live Demo

Public deployment (auto-updated after each push):

```
https://hello-world-app-amos.onrender.com
```

(Note: Free Render instances may take ~20–40 seconds to wake after inactivity.)

---

## 🧰 Tech Stack

- GitHub Actions (CI/CD automation)
- Cypress (end-to-end testing)
- Docker (containerization)
- Docker Hub (artifact registry)
- Render (cloud deployment platform)
- Node.js (application runtime)

---

## 🏗️ Pipeline Architecture

The pipeline follows a modern DevOps delivery workflow:

```
Developer push
    ↓
GitHub Actions workflow
    ↓
Cypress E2E tests executed
    ↓
Docker image built
    ↓
Docker image pushed to Docker Hub
    ↓
Render deploy hook triggered
    ↓
Live cloud service redeployed automatically
```

This demonstrates a full **Continuous Integration + Continuous Deployment pipeline**.

---

## ⚙️ CI/CD Workflow Details

### 1. Continuous Integration

On every push:

- Dependencies installed
- Application started locally inside runner
- Cypress tests executed automatically

Pipeline continues only if tests pass.

---

### 2. Containerization

After successful tests:

- Docker image is built
- Image tagged as:

```
fabinyib/hello-world-app:latest
```

This creates a reusable deployment artifact.

---

### 3. Artifact Publishing

The pipeline publishes the Docker image to:

```
Docker Hub
```

This enables deployment from any environment supporting containers.

---

### 4. Continuous Deployment

After publishing the image:

- Render Deploy Hook is triggered automatically
- Render pulls latest Docker image
- Running container restarts
- Live application updates

This completes the automated deployment lifecycle.

### 5. Docker Image Versioning Strategy

Each pipeline execution publishes a versioned Docker image to Docker Hub.

Images are tagged with:

- latest → always represents the newest successful build
- ${{ github.run_number }} → uniquely identifies each pipeline execution

This approach enables deployment traceability and supports rollback to previous working versions if needed.

---

## 🚀 How to Run Locally

### Clone repository

```
git clone https://github.com/FabinyiB/Devops-Project.git
cd Devops-Project
```

### Build Docker image

```
docker build -t hello-world-app .
```

### Run container

```
docker run -p 3000:3000 hello-world-app
```

Open:

```
http://localhost:3000
```

---

## 🔄 Workflow Trigger

Pipeline runs automatically on:

- Push to repository

Workflow stages:

```
Test → Build → Publish → Deploy
```

---

## 📊 What This Project Demonstrates

This project showcases practical DevOps skills including:

- CI pipeline design with GitHub Actions
- Automated Cypress E2E test execution
- Docker image creation and tagging
- Artifact publishing to Docker Hub registry
- Cloud deployment using Render
- Automatic redeployment using deploy hooks

---

## 📌 Future Improvements

Planned enhancements:

- Multi-environment deployments (DEV / INT / PROD)
- Environment-based configuration handling
- Monitoring integration (Prometheus / Grafana)
- Container version tagging strategy
- Rollback deployment strategy

---

## 👤 Author

FabinyiB

---

## ⭐ Project Purpose

This repository was created as a hands-on DevOps learning project to demonstrate end-to-end CI/CD workflow automation suitable for QA Automation / SDET / Junior DevOps portfolio use.

