import React from 'react';
import './App.css'; // Importiere die CSS-Datei

function App() {
  const greeting = "Heute ist ein großartiger Tag!";
  
  // Funktion, die beim Klick auf den Button ausgeführt wird
  const handleClick = () => {
    alert('Button wurde geklickt!');
  };

  return (
    <>
      <h1>Willkommen zu meiner ersten React-App</h1>
      <h2>{greeting}</h2>
      <h3>2 + 3 = {2 + 3}</h3>
      {/* Button mit dem onClick-Handler */}
      <button onClick={handleClick}>Klick mich!</button>
    </>
  );
}

export default App;
