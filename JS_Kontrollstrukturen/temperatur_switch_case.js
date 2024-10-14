// Funktion, die eine zufällige Temperatur zwischen -20 und 40 Grad Celsius zurückgibt
function getTemperature() {
  return Math.floor(Math.random() * 61) - 20; // Bereich von -20 bis 40
}

// Funktion zur Bewertung der Temperatur mit switch-case
function checkTemperature() {
  let temperature = getTemperature();
  let feedback;

  // Switch-case-Anweisung zur Bewertung der Temperatur
  switch (true) {
    case (temperature < 0):
      feedback = "Es ist sehr kalt";
      break;
    case (temperature >= 0 && temperature <= 15):
      feedback = "Es ist kühl";
      break;
    case (temperature >= 16 && temperature <= 25):
      feedback = "Es ist angenehm warm";
      break;
    case (temperature > 25 && temperature <= 30):
      feedback = "Es ist heiß";
      break; 
    case (temperature > 30):
      feedback = "Es ist sehr heiß";
      break;
    default:
      feedback = "Ungültige Temperatur"; // Für den unwahrscheinlichen Fall
  }

  // Ausgabe der Temperatur und des Feedbacks
  console.log("Die Temperatur beträgt " + temperature + "°C. " + feedback);
}

// Test der Funktion
checkTemperature();
