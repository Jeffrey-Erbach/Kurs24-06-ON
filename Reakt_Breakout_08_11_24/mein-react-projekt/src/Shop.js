import React from 'react';

// Shop-Komponente, die den Spieler und setPlayer als Props erhält
const Shop = ({ player, setPlayer, onPurchase, onBack }) => {
  // Funktion, die beim Kauf eines Items ausgeführt wird
  const handlePurchase = (item) => {
    // Überprüfen, ob der Spieler genug Gold hat
    if (player.money >= item.price) {
      // Spieler Gold abziehen und den neuen Zustand setzen
      setPlayer(prevPlayer => ({
        ...prevPlayer,
        money: prevPlayer.money - item.price, // Abziehen des Goldes
      }));
      // onPurchase wird aufgerufen, um weitere Aktionen (z.B. Loggen) zu ermöglichen
      onPurchase(item);  
    } else {
      // Falls der Spieler nicht genug Gold hat, wird eine Warnung ausgegeben
      alert('Du hast nicht genug Gold!');
    }
  };

  // Kategorien von Items, die im Shop gekauft werden können
  const items = {
    Waffen: {
      Schwerter: [
        { name: 'Flammenschwert', price: 50 },
        { name: 'Scimitar', price: 75 },
        { name: 'Säbel', price: 40 },
      ],
      Äxte: [
        { name: 'Kriegsaxt', price: 60 },
        { name: 'Doppelaxt', price: 90 },
        { name: 'Handaxt', price: 35 },
      ],
      Stäbe: [
        { name: 'Zauberstab', price: 100 },
        { name: 'Magierstab', price: 120 },
        { name: 'Kristallstab', price: 150 },
      ],
    },
    Rüstungen: {
      Leichte: [
        { name: 'Lederrüstung', price: 50 },
        { name: 'Stoffrüstung', price: 30 },
        { name: 'Wanderkleidung', price: 20 },
      ],
      Mittlere: [
        { name: 'Kettenhemd', price: 100 },
        { name: 'Schuppenpanzer', price: 120 },
        { name: 'Lederpanzer', price: 80 },
      ],
      Schwere: [
        { name: 'Plattenrüstung', price: 200 },
        { name: 'Gothic-Rüstung', price: 250 },
        { name: 'Ritterrüstung', price: 300 },
      ],
    },
    Tränke: {
      Heiltränke: [
        { name: 'Kleiner Heiltrank', price: 10 },
        { name: 'Großer Heiltrank', price: 30 },
      ],
      Manatränke: [
        { name: 'Kleiner Manatrank', price: 15 },
        { name: 'Großer Manatrank', price: 35 },
      ],
      Stärketränke: [
        { name: 'Stärketrank', price: 25 },
        { name: 'Mächtiger Stärketrank', price: 50 },
      ],
    },
  };

  return (
    <div className="shop">
      <h2>Willkommen im Shop!</h2>

      {/* Kategorien anzeigen */}
      <div className="categories">
        {Object.keys(items).map((category) => (
          <div key={category} className="category">
            <h3>{category}</h3>
            <div className="subcategories">
              {Object.keys(items[category]).map((subCategory) => (
                <div key={subCategory} className="subcategory">
                  <h4>{subCategory}</h4>
                  <div className="item-list">
                    {items[category][subCategory].map((item, index) => (
                      <div key={index} className="item">
                        <p>{item.name}</p>
                        <p>Preis: {item.price} Gold</p>
                        <button onClick={() => handlePurchase(item)}>
                          Kaufen
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Zurück-Button */}
      <button onClick={onBack}>Zurück</button>
    </div>
  );
};

export default Shop;
