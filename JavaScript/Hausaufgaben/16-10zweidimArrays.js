// Erstellt ein 2D-Array, das eine 3x3-Matrix mit den Zahlen 1 bis 9 repräsentiert
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // Funktion zur Berechnung der Diagonalsumme der Matrix
  function calculateDiagonalSum(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
      sum += matrix[i][i]; // Addiere die Elemente von oben links nach unten rechts
    }
    return sum;
  }
  
  // Berechnet und gib die Diagonalsumme aus
  let diagonalSum = calculateDiagonalSum(matrix);
  console.log("Diagonalsumme:", diagonalSum);
  
  //Verwandelt die Matrix in eine 3x3 Matrix mit Nullen in den Ecken
  matrix[0][0] = 0; // Oben links
  matrix[0][2] = 0; // Oben rechts
  matrix[2][0] = 0; // Unten links
  matrix[2][2] = 0; // Unten rechts

 
  
  // Ausgabe der modifizierten Matrix
  console.log("Matrix mit Nullen in den Ecken:", matrix);

  // Wie es aussehen würde:
  // [0, 2, 0]
  // [4, 5, 6]
  // [0, 8, 0]
  