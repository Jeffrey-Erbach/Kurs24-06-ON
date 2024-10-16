// String-Manipulation
// 1. String-verkettung
name = "Jeffrey";
greeting = "Hallo";
console.log("Willkommen," + name);
console.log("Willkommen " + name + " möchtest du " + greeting + " sagen" )

// 2. Template-Strings
nachname = "Erbach";
gruss = `Willkommen Herr ${nachname}`;
console.log(gruss);
zahl1 = 5;
zahl2 = 7;
erg = (zahl1 + zahl2);
console.log(`Das Ergebnis ist ${erg}`);
console.log("Das Ergebnis ist " + erg);

// 3. String-Methoden
str1 = "Hallo Kurs TEILNEHMER!";
formattedStrL = str1.trim().toLowerCase();
console.log(formattedStrL);
formattedStrU = str1.trim().toUpperCase();
console.log(formattedStrU);

// 4. String-Interpolation
function mehrwertSteuerpreis(preis){
    const steuersatz = 0.19;
    gesamtpreis = preis * (1 + steuersatz);
    return `Der Gesamtpreis beträgt: €${gesamtpreis.toFixed(2)}`;
}
console.log(mehrwertSteuerpreis(100));

// 5. Verwendung von replace()
text = "Ich habe ein Haustier. Es ist ein Kater. Sein Name ist Gojo"
neuerText = text.replace("Gojo", "Itto");
console.log(neuerText);



