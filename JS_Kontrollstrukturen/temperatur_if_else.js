// Funktion, die eine zufällige Temperatur zwischen -20 und 40 Grad Celsius zurückgibt
function getTemperature() {
    return Math.floor(Math.random() * 61) - 20; // Bereich von -20 bis 40
  }
  
  // Funktion zur Bewertung der Temperatur mit if-else
  function checkTemperature() {
    let temperature = getTemperature();
    let feedback;
  
    // If-else-Anweisung zur Bewertung der Temperatur
    if (temperature < 0) {
      feedback = "Es ist sehr kalt";
    } else if (temperature >= 0 && temperature <= 15) {
      feedback = "Es ist kühl";
    } else if (temperature >= 16 && temperature <= 25) {
      feedback = "Es ist angenehm warm";
    } else {
      feedback = "Es ist heiß";
    }
  
    // Ausgabe der Temperatur und des Feedbacks
    console.log("Die Temperatur beträgt " + temperature + "°C. " + feedback);
  }
  
  // Testen der Funktion
  checkTemperature();
  