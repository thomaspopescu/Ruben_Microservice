# Inventory Microservice for Ruben

## 📌 Overview
This microservice provides inventory management functionality, allowing users to:
- Retrieve all items from the database.
- Add new items to the inventory.
- Delete items from the inventory.

## 🔗 API Endpoints

### ✅ Get All Items
**Request:**
```http
GET /items


Example Response
[
    {"item_id": 1, "item_name": "Laptop", "cost": 1000},
    {"item_id": 2, "item_name": "Monitor", "cost": 300}
]

Add New Item
Request

POST /items
Content-Type: application/json
{
    "itemname": "Mouse",
    "cost": 25
}

Example Response

{
    "item_id": 3,
    "item_name": "Mouse",
    "cost": 25
}

---

Delete an Item 

DELETE /items/3

---

Example Response 

{
    "message": "Item 3 deleted"
}