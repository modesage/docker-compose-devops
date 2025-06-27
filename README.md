# Project Setup Instructions

## 🛠 Manual Installation

1. **Install Node.js**  
   Download and install Node.js from [https://nodejs.org](https://nodejs.org)

2. **Clone the Repository**

   ```bash
   git clone <git@github.com:modesage/docker-compose-devops.git>
   cd <docker-compose-devops>
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Set Up a Local PostgreSQL Database**

   **Option 1: Use Docker**

   ```bash
   docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
   ```

   **Option 2: Use a Hosted Database**  
   Go to [https://neon.tech](https://neon.tech) and create a new PostgreSQL database.

5. **Configure Environment Variables**

   - Copy `.env.example` to `.env` if needed
   - Update the database credentials in your `.env` file

6. **Run Prisma Migrations and Generate Client**

   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

7. **Build and Start the Application**

   ```bash
   npm run build
   npm start
   ```

---

## 🐳 Docker Installation

1. **Install Docker and Docker Compose**

2. **Create a Docker Network**

   ```bash
   docker network create user_project_network
   ```

3. **Start PostgreSQL Container**

   ```bash
   docker run --network user_project_network --name postgres_container -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
   ```

4. **Build the Application Image**

   ```bash
   docker build --network=host -t user-project .
   ```

5. **Run the Application Container**

   ```bash
   docker run -e DATABASE_URL=postgresql://postgres:mysecretpassword@postgres_container:5432/postgres --network user_project_network -p 3000:3000 user-project
   ```

---

## 🐳 Docker Compose Installation

1. **Install Docker**

2. **Start the Application**

   ```bash
   docker-compose up
   ```

---
