import catFacts from 'cat-facts';
import inquirer from 'inquirer';

function showCatFact() {
    const fact = catFacts.random(); // Ruft einen zufälligen Katzenfakt ab
    console.log(`Hier ist ein Katzenfakt: ${fact}`);
}

function askForNewCatFact() {
    console.log("Möchtest du einen weiteren Katzenfakt erfahren? (ja/nein)");
    // Weitere Interaktionslogik hier, z. B. Eingabeprüfung
}

async function askForUsername() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'Wie lautet dein Name?',
        }
    ]);
    return answers.username; // Gibt den Benutzernamen zurück
}



async function main() {
    const username = await askForUsername();
    console.log(`Willkommen, ${username}!`);
    showCatFact();
    askForNewCatFact(); 

}
main();