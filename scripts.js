document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Basic validation (this should be more secure in a real application)
            if (username === 'admin' && password === 'password') {
                window.location.href = 'index.html';
            } else {
                alert('Invalid username or password');
            }
        });
    }

    const itemForm = document.getElementById('item-form');
    const itemNameInput = document.getElementById('item-name');
    const itemQuantityInput = document.getElementById('item-quantity');
    const inventoryTbody = document.getElementById('inventory-tbody');

    if (itemForm) {
        itemForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            const itemName = itemNameInput.value;
            const itemQuantity = itemQuantityInput.value;

            addItemToInventory(itemName, itemQuantity);
            
            itemNameInput.value = '';
            itemQuantityInput.value = '';
        });
    }

    if (inventoryTbody) {
        function addItemToInventory(name, quantity) {
            const row = document.createElement('tr');
            
            const nameCell = document.createElement('td');
            nameCell.textContent = name;
            
            const quantityCell = document.createElement('td');
            quantityCell.textContent = quantity;
            
            const actionCell = document.createElement('td');
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('action-button');
            deleteButton.addEventListener('click', () => {
                inventoryTbody.removeChild(row);
            });
            actionCell.appendChild(deleteButton);
            
            row.appendChild(nameCell);
            row.appendChild(quantityCell);
            row.appendChild(actionCell);
            
            inventoryTbody.appendChild(row);
        }
    }
});