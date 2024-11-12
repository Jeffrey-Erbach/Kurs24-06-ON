import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // useState für den Zähler

  // Diese Funktion wird aufgerufen, wenn der Button geklickt wird
  const increment = () => {
    setCount(count + 1); // Zähler um 1 erhöhen
  };

  // Farbliche Gestaltung für die Anzeige und den Button
  const counterStyle = {
    backgroundColor: count % 2 === 0 ? '#4CAF50' : '#FF5722', // Grün für gerade, Orange für ungerade Zahlen
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
    textAlign: 'center',
    fontSize: '20px',
  };

  const buttonStyle = {
    backgroundColor: '#2196F3', // Blau
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div>
      <h2 style={counterStyle}>Zähler</h2>
      <p style={counterStyle}>Du hast {count} Mal geklickt</p>
      <button style={buttonStyle} onClick={increment}>Klicken</button>
    </div>
  );
}

export default Counter;
