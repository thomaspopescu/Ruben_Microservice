# Ruben_Microservice
# Inventory Microservice – Ruben_Microservice
### Author: Thomas Popescu
### Description: This microservice provides inventory item information to Ruben’s web application via a REST API. It interacts with a PostgreSQL database to retrieve item details.

How to Set Up and Run the Microservice

# 1️⃣ Prerequisites
Make sure the following are installed:

Node.js (latest LTS version)
PostgreSQL (latest version)
Git (for pulling the repo)

# 2️⃣ Installation & Setup
Clone the Repository:
git clone https://github.com/thomaspopescu/CS361-Project.git
cd CS361-Project/Ruben_Microservice

Install Dependencies:
npm install

Set Up PostgreSQL Database:

Open pgAdmin4 or any PostgreSQL interface.
Create a database called:
CREATE DATABASE inventory_db;
Switch to inventory_db:
\c inventory_db
Create the items table:
CREATE TABLE items (
item_id SERIAL PRIMARY KEY,
item_name TEXT NOT NULL,
cost INT NOT NULL
);

# 3️⃣ Running the Microservice
Start the microservice by running:
node server.js

If successful, you should see:
✅ Server running on http://localhost:5000
✅ Connected to PostgreSQL


# 📡 How to Request and Receive Data

## 1. Request Inventory Data
Endpoint: GET /items
Request Example:
curl -X GET http://localhost:5000/items

Response Example:
[
{"item_id": 1, "item_name": "Laptop", "cost": 1000},
{"item_id": 2, "item_name": "Monitor", "cost": 300}
]

## 2. Receive Inventory Data
The response returns an array of objects, each containing:

item_id – Unique identifier of the item
item_name – Name of the item
cost – Cost of the item in integer format


# ❓ Troubleshooting
PostgreSQL Connection Error?

Ensure PostgreSQL is running:
sudo service postgresql start (Linux/macOS)
net start postgresql (Windows)
Check database credentials in server.js
Port 5000 Already in Use?

Kill the process using:
npx kill-port 5000

# 🛠️ Integration Notes
This microservice should be run locally on Ruben’s machine.
Ruben’s web app should make requests to http://localhost:5000/items to retrieve inventory information.

# UML Sequence Diagram - Fetch All Items (GET /Items)
![image](https://github.com/user-attachments/assets/6e6da22a-8423-497d-af20-a4bd3bb3a0eb)

