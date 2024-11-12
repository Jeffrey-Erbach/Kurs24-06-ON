// Battle.js
import React, { useState } from 'react';

const Battle = ({ player, setPlayer, onExit }) => {
  // Liste der Gegner mit verschiedenen Eigenschaften
  const enemies = [
    { name: "Skelett", hp: 50, minDamage: 5, maxDamage: 10 },
    { name: "Troll", hp: 80, minDamage: 8, maxDamage: 15 },
    { name: "Oger", hp: 100, minDamage: 10, maxDamage: 20 },
    { name: "Werwolf", hp: 60, minDamage: 6, maxDamage: 12 },
    { name: "Goblin", hp: 40, minDamage: 4, maxDamage: 8 },
  ];

  // Zufälliger Gegner wird ausgewählt
  const randomEnemy = enemies[Math.floor(Math.random() * enemies.length)];

  const [enemy, setEnemy] = useState(randomEnemy);
  const [battleOutcome, setBattleOutcome] = useState(null);

  const handleBattle = () => {
    const playerDamage = Math.floor(Math.random() * 20) + 5; // Zufallsschaden des Spielers
    const enemyDamage = Math.floor(Math.random() * (enemy.maxDamage - enemy.minDamage + 1)) + enemy.minDamage;

    const newPlayerHp = player.hp - enemyDamage;
    const newEnemyHp = enemy.hp - playerDamage;

    setPlayer(prevPlayer => ({
      ...prevPlayer,
      hp: newPlayerHp > 0 ? newPlayerHp : 0, // Spieler HP aktualisieren
    }));

    setEnemy(prevEnemy => ({
      ...prevEnemy,
      hp: newEnemyHp > 0 ? newEnemyHp : 0, // Gegner HP aktualisieren
    }));

    let outcome = '';
    let xpEarned = 0;
    let goldEarned = 0;

    if (newPlayerHp <= 0) {
      outcome = `Du wurdest vom ${enemy.name} besiegt!`;
    } else if (newEnemyHp <= 0) {
      // Der Spieler besiegt den Gegner
      xpEarned = Math.floor(Math.random() * 50) + 10;  // Zufällige XP zwischen 10 und 60
      goldEarned = Math.floor(Math.random() * 20) + 5;   // Zufälliges Gold zwischen 5 und 25
      setPlayer(prevPlayer => ({
        ...prevPlayer,
        xp: prevPlayer.xp + xpEarned,
        money: prevPlayer.money + goldEarned,
      }));

      outcome = `Das ${enemy.name} wurde besiegt! Du hast ${xpEarned} XP und ${goldEarned} Gold erhalten.`;
    } else {
      outcome = `Du hast ${playerDamage} Schaden am ${enemy.name} verursacht. Das ${enemy.name} hat dir ${enemyDamage} Schaden zugefügt.`;
    }

    setBattleOutcome(outcome);
  };

  return (
    <div className="battle">
      <h2>Der Kampf gegen das {enemy.name} beginnt!</h2>
      <p>Dein HP: {player.hp} | {enemy.name} HP: {enemy.hp}</p>
      <button onClick={handleBattle}>Angreifen</button>
      {battleOutcome && <p>{battleOutcome}</p>}

      <button onClick={onExit} className="exit-button">
        Kampf beenden
      </button>
    </div>
  );
};

export default Battle;
