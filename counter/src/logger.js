const log = async (level, message) => {
    console.log("Sende Log:", { level, message }); // Debug-Ausgabe
    try {
      await fetch('http://localhost:5000/log', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ level, message }),
      });
    } catch (error) {
      console.error("Fehler beim Logging:", error); // Fehlerprotokollierung
    }
  };
  
  
  export default log;
  