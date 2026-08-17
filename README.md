# Collaborative Whiteboard

A full-stack, real-time collaborative whiteboard application designed for distributed teams. Built with a decoupled client-server architecture, the application features seamless canvas synchronization, secure user authentication, and fully automated CI/CD deployment pipelines hosted on AWS infrastructure.

## System Architecture

* **Frontend:** React (Single Page Application), distributed globally via AWS Amplify CDN.
* **Backend:** Node.js API, containerized via Docker, deployed on an Amazon EC2 instance.
* **Monorepo Strategy:** Isolated execution environments for the client and server within a single repository, managed by targeted build pipelines.

## CI/CD Infrastructure

* **Frontend Pipeline (AWS Amplify):** Native webhooks monitor the `frontend/` directory. Commits trigger an automated build environment that securely injects environment variables, compiles the static assets, and deploys to the global CDN.
* **Backend Pipeline (GitHub Actions):** A custom YAML workflow monitors the `backend/` directory. Commits trigger a runner that pushes a new Docker image, executes a secure SSH connection to the EC2 instance, tears down the active container, and runs the updated image with zero manual intervention.

## Key Features

* **Real-Time Collaboration:** Synchronized canvas state updates across multiple clients via WebSockets.
* **User Authentication:** Secure registration and login workflows utilizing JWT authorization.
* **State Persistence:** Stores canvas vector data in MongoDB, allowing users to save, close, and reload previous drawing sessions.

## Local Development Setup

### Prerequisites
* Node.js
* Git

### 1. Clone the Repository
```bash
git clone https://github.com/anshuman04-oss/Collaborative-Whiteboard.git
cd Collaborative-Whiteboard
```

### 2. Backend Setup
```bash
cd backend
npm install
```
Create a .env file in the backend/ directory:
```bash
PORT=5000
MONGODB_URI=
JWT_SECRET=
```
Start the backend server:
```bash
npm run dev
```

### 2. Backend Setup
```bash
cd frontend
npm install
```
Create a .env file in the frontend/ directory:
```bash
REACT_APP_BACKEND_URL=http://localhost:5000
```
Start the frontend development server:
```bash
npm start
```
