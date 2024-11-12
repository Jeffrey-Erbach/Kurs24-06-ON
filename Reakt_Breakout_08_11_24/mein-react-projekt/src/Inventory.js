import React, { useState } from 'react';
import './Inventory.css'; // Importiert die CSS-Datei


function Inventory() {
  const [inventory, setInventory] = useState({
    healthPotions: 0, // Anzahl der Heiltränke
    swords: 0,        // Anzahl der Waffen
    armors: 0,        // Anzahl der Rüstungen
  });

  const [coins, setCoins] = useState(100); // Spieler startet mit 100 Münzen

  // Die Items, die im Spiel verfügbar sind
  const items = [
    { id: 1, name: 'Heiltrank', type: 'healthPotion', effect: 20, price: 10 },
    { id: 2, name: 'Schwert', type: 'sword', effect: 5, price: 50 },
    { id: 3, name: 'Rüstung', type: 'armor', effect: 10, price: 75 },
  ];

  // Funktion, um ein Item zu kaufen
  const buyItem = (item) => {
    if (coins >= item.price) {
      setCoins(coins - item.price);
      setInventory((prevInventory) => ({
        ...prevInventory,
        [item.type]: prevInventory[item.type] + 1,
      }));
    } else {
      alert('Nicht genug Münzen!');
    }
  };

  // Funktion, um einen Heiltrank zu verwenden
  const useHealthPotion = () => {
    if (inventory.healthPotions > 0) {
      setInventory((prevInventory) => ({
        ...prevInventory,
        healthPotions: prevInventory.healthPotions - 1,
      }));
      alert('Heiltrank verwendet! Du hast 20 HP zurückgewonnen.');
    } else {
      alert('Keine Heiltränke im Inventar!');
    }
  };

  return (
    <div>
      <h2>Inventar</h2>
      <p>Verfügbare Münzen: {coins}</p>
      <div>
        <h3>Gekaufte Items</h3>
        <p>Heiltränke: {inventory.healthPotions}</p>
        <p>Schwerter: {inventory.swords}</p>
        <p>Rüstungen: {inventory.armors}</p>
      </div>

      <div>
        <h3>Verfügbare Items</h3>
        {items.map((item) => (
          <div key={item.id}>
            <p>
              {item.name} - Preis: {item.price} Münzen
            </p>
            <button onClick={() => buyItem(item)}>Kaufen</button>
          </div>
        ))}
      </div>

      {/* Heiltrank verwenden */}
      <button onClick={useHealthPotion}>Heiltrank verwenden</button>
    </div>
  );
}

export default Inventory;
