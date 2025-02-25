// Fetch All Items
function fetchItems() {
    fetch("/items")
        .then((response) => response.json())
        .then((data) => {
            const itemList = document.getElementById("itemList");
            itemList.innerHTML = ""; // Clear previous list
            data.forEach((item) => {
                const li = document.createElement("li");
                li.innerHTML = `${item.item_name} - $${item.cost} 
                    <button onclick="deleteItem(${item.item_id})">Delete</button>`;
                itemList.appendChild(li);
            });
        })
        .catch((error) => console.error("Error fetching items:", error));
}

// Add Item
function addItem() {
    const itemname = document.getElementById("itemName").value;
    const cost = document.getElementById("itemCost").value;

    fetch("/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ itemname, cost }),
    })
        .then(response => response.json())
        .then(() => {
            fetchItems(); // Refresh items
            document.getElementById("itemName").value = "";
            document.getElementById("itemCost").value = "";
        })
        .catch(error => console.error("Error adding item:", error));
}

// Delete Item
function deleteItem(id) {
    fetch(`/items/${id}`, { method: "DELETE" })
        .then(() => fetchItems()) // Refresh list
        .catch((error) => console.error("Error deleting item:", error));
}
