// UserList.js - Komponente zum Abrufen von Benutzerdaten
import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users') // Beispiel-API für Benutzerdaten
      .then((response) => response.json())
      .then((data) => setUsers(data)); // Speichert die abgerufenen Daten im State
  }, []); // Leeres Array, damit der Effekt nur einmal beim Laden ausgeführt wird

  return (
    <div>
      <h2>Benutzerliste</h2>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p> // Gibt jeden Benutzernamen aus
      ))}
    </div>
  );
}

export default UserList;
