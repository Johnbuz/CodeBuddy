import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch message from backend
    fetch('/api/message')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching message:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to CodeBuddy!</h1>
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
