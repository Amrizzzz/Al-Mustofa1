// pages/index.tsx
'use client'

import { useState, useEffect } from 'react';

interface Item {
  id: number;
  name: string;
}

export default function Home() {
  const [itemName, setItemName] = useState<string>('');
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    // Ambil data dari localStorage saat komponen dimount
    const storedItems = localStorage.getItem('items');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    // Simpan data ke localStorage setiap kali items berubah
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const createItem = () => {
    if (itemName.trim() !== '') {
      setItems((prevItems) => [
        ...prevItems,
        { id: Date.now(), name: itemName },
      ]);
      setItemName('');
    }
  };

  const updateItem = (id: number, newName: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, name: newName } : item
      )
    );
  };

  const deleteItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>CRUD Without Database</h1>

      <div>
        <label htmlFor="itemName">Item Name:</label>
        <input
          type="text"
          id="itemName"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <button onClick={createItem}>Add Item</button>
      </div>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} (ID: {item.id})
            <button onClick={() => updateItem(item.id, prompt('New name:', item.name) || item.name)}>
              Update
            </button>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
