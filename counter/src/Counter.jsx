import { useState } from "react";
import log from "./logger"; // Import der Logging-Funktion

function Counter() {
  const [count, setCount] = useState(0);

  // Funktion zum Inkrementieren des Zählers
  let incrementCount = () => {
    log("info", "Inkrementiere Zähler"); // Log-Ereignis
    setCount(count + 1);
    log("info", `Neuer Zählerwert: ${count + 1}`); // Neuer Zählerwert wird geloggt
  };

  // Funktion zum Dekrementieren des Zählers
  let decrementCount = () => {
    log("info", "Versuche, Zähler zu dekrementieren"); // Log-Ereignis
    log("info", `Aktueller Zählerwert: ${count}`);
    if (count === 0) {
      log("error", "Zählerwert ist bereits 0. Decrementieren ist nicht möglich."); // Fehler loggen
      return;
    }
    setCount(count - 1);
    log("warn", `Neuer Zählerwert: ${count - 1}`); // Warnung für Dekrementierung
  };

  // Rendern der Komponente
  return (
    <div className="app">
      <div>
        <div className="count">
          <h1 data-testid="counter-text">Count: {count}</h1>
        </div>
        <div className="buttons">
          <button data-testid="decrease" title={"-"} onClick={decrementCount}>
            -
          </button>
          <button data-testid="increase" title={"+"} onClick={incrementCount}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
