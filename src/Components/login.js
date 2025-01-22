// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/login.scss';
import Cookies from 'js-cookie'; // Importa il pacchetto js-cookie

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Qui puoi gestire il submit del form, ad esempio, effettuando una richiesta API per verificare le credenziali.
        if (username === 'S64241' && password === 'Tester29') {
            Cookies.set('username', username); // Crea un cookie con il nome 'username'
            console.log('Credenziali valide');
            navigate('/');
        } else {
            // Credenziali non valide, mostra un messaggio di errore
            setError('Credenziali non valide. Riprova.');
        }
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className="login-container">
            <h2>Inserisci le tue credenziali</h2>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={handleUsernameChange} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
