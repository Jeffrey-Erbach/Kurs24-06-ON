import React, { useState } from 'react';
import './Player.css';

function Player({ name, initialGold, initialHP, initialXP }) {
  const [gold, setGold] = useState(initialGold);
  const [hp, setHP] = useState(initialHP);
  const [xp, setXP] = useState(initialXP);

  return (
    <div className="player">
      <h2>Spieler: {name}</h2>
      <p>💰 Gold: {gold}</p>
      <p>❤️ HP: {hp}</p>
      <p>⭐ XP: {xp}</p>
    </div>
  );
}

export default Player;
