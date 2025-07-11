# Life Insurance Backend – README.md

## Project Overview

This is the **backend service** for the Life Insurance Recommendation MVP. It provides REST API endpoints to receive user profile data, process business logic, and return personalized life insurance recommendations.

---

## Features Implemented

- Built with **NestJS + TypeScript**.
- REST API endpoint `/recommendation` that accepts:
  - Age
  - Income
  - Number of Dependents
  - Risk Tolerance
- Returns a simple rules-based insurance recommendation with explanation.
- Uses **PostgreSQL** to store user submissions.
- Designed for extensibility for ML-based recommendation in the future.

---

## ⚙️ Setup Instructions

1. Clone the repository

```bash
git clone https://github.com/your-username/life-insurance-backend.git
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file with the following variables:

```
PORT=9000
FRONTEND_URL=''
DATABASE_URL=''
```

> ⚠️ **Note:** Update these values for your own environment securely.

4. Run the development server

```bash
npm run start:dev
```

---

## Deployment (Render)

1. Push code to GitHub.
2. Log in to [Render](https://render.com) and create a **New Web Service**.
3. Connect your GitHub repository.
4. Configure Build and Start commands:

- **Build Command:**

```
npm install && npm run build
```

- **Start Command:**

```
npm run start:prod
```

5. Set environment variables in Render (same as `.env` file).
6. Click **Deploy**.


---

## Technologies Used

- Node.js
- NestJS
- TypeORM
- PostgreSQL