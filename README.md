# Backend README.md – Setup and Deployment Instructions

## Setup Instructions

1. Clone the backend repository from GitHub.

```
git clone https://github.com/your-username/your-backend-repo.git
cd your-backend-repo
```

2. Install dependencies:

```
npm install
```

3. Create a `.env` file in the root directory with the following environment variables:

```
PORT=9000
FRONTEND_URL=http://localhost:3000
DATABASE_URL=postgres://avnadmin:AVNS_CwynbtGBtKGY-lkIIcP@pg-3958d672-atuldharwal22-ec9a.e.aivencloud.com:27904/defaultdb
```

> ⚠️ **Note:** Update these values as per your environment and database credentials securely.

4. Run the development server:

```
npm run dev
```

## Deployment (Render)

1. Push your backend code to GitHub.
2. Log in to [Render](https://render.com) and create a **New Web Service**.
3. Connect your GitHub repository.
4. Enter your build command (e.g. `npm install`) and start command (e.g. `npm run start:prod`).
5. Set all required environment variables in the Render dashboard (same as your `.env` file).
6. Click **Deploy** to launch your backend API.

---

*(Backend README.md describing setup, environment variables, and deployment instructions only, as requested.)*

