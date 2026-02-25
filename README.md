# Simple Messaging App

A lightweight messaging web app built with **Node.js**, **Express**, **PostgreSQL**, and **EJS** for the frontend. Users can post messages and view all messages in real time.

---

## Features

- Post messages with a username
- View all messages in reverse chronological order
- Simple, clean UI with EJS templates
- Uses PostgreSQL for persistent storage
- Ready for local development or deployment to Render

---

## Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/lbagd9898/simple-messaging-app.git
cd simple-messaging-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure local environment

Create a .env file in the root of the project:

```.env
DB_HOST=localhost
DB_USER=your_postgres_user
DB_PASSWORD=your_postgres_password
DB_NAME=messages
DB_PORT=5432
PORT=3000
NODE_ENV=development
```

Make sure your local PostgreSQL database is set up.
Run SQL to create the messages table manually (only required for local development):

```sql
CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 4. Run the app locally

```bash
npm start
```

Open your browser and visit http://localhost:3000

Start posting messages

## Folder Structure

```
simple-messaging-app/
│
├── app.js           # Express app setup
├── server.js        # Server entry point
├── pool.js          # Postgres pool and production table initialization
├── routes/          # Express routes
├── views/           # EJS templates
├── public/          # Static assets (optional)
└── package.json
```

## Contributing

### 1. Fork the repository

### 2. Create a branch for your feature: git checkout -b feature-name

### 3. Commit your changes: git commit -m "Add new feature"

### 4. Push to the branch: git push origin feature-name

### 5. Open a Pull Request
