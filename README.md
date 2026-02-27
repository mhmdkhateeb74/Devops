# DevOps Portfolio / Personal Website 🚀

## 📌 Overview
This repository contains my personal **portfolio / CV website**, developed as part of a DevOps course assignment.

The project demonstrates a complete DevOps workflow, including:
- Version control with **GitHub**
- Containerization using **Docker**
- Service orchestration with **Docker Compose**
- CI/CD pipelines using **GitHub Actions**
- Deployment on a **Linux cloud server** with **public DNS access**

---

## 🎯 Project Goal
The goal of this project is to present a **professional personal profile** while applying DevOps principles in a real, production-like environment.

---

## 🌐 Live Website
**Website:** https://mhmdportfolio.duckdns.org/
---

## 🧑‍💻 Website Features
The personal website includes:
- Short self-introduction
- Education and learning background
- Technical skills
- Profile image
- Links to personal projects
- Link to my GitHub profile

---

## 🛠 Technologies Used
- **HTML / CSS / JavaScript**
- **Docker**
- **Docker Compose**
- **GitHub Actions (CI/CD)**
- **Linux Cloud Server**
- **DuckDNS** (Subdomain & DNS)
- **Nginx** (Reverse Proxy / SSL) *(if used)*

---

## 🐳 Docker & Deployment
The website is fully containerized and deployed on a remote Linux server.

Included files:
- `Dockerfile` — builds the website image  
- `docker-compose.yml` — runs the website as a service  

Deployment is exposed via a public subdomain using DuckDNS.

---

## 🔄 CI/CD Pipeline (GitHub Actions)
This project includes a GitHub Actions pipeline that performs:
- Source code checkout
- Build & validation (optional)
- Docker image build
- Push / Deploy steps (optional, based on workflow)
- Automated execution on every push to `main`

CI/CD configuration files are located under:
- `.github/workflows/`

---
