import React, { useState } from 'react';
import Shop from './Shop';
import Battle from './Battle';

const App = () => {
  const [player, setPlayer] = useState({
    hp: 100,
    money: 50,
    xp: 0,
    inventory: [],
  });
  
  const [inBattle, setInBattle] = useState(false);
  const [showShop, setShowShop] = useState(false);

  const onPurchase = (item) => {
    setPlayer(prevPlayer => ({
      ...prevPlayer,
      inventory: [...prevPlayer.inventory, item],
    }));
    alert(`${item.name} wurde deinem Inventar hinzugefügt!`);
  };

  const handleBack = () => {
    setShowShop(false); // Shop schließen
  };

  return (
    <div>
      <h1>FANTASY RPG</h1>
      <p>HP: {player.hp} | Gold: {player.money} | XP: {player.xp}</p>
      
      <button onClick={() => setShowShop(!showShop)}>Shop</button>
      <button onClick={() => setInBattle(true)}>Kampf</button>

      {showShop && <Shop player={player} setPlayer={setPlayer} onPurchase={onPurchase} onBack={handleBack} />}
      {inBattle && <Battle player={player} setPlayer={setPlayer} onExit={() => setInBattle(false)} />}
    </div>
  );
};

export default App;
