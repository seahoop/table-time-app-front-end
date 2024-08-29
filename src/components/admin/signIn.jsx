import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleBackClick = () => {
        navigate('/admin');
    };

    const handleSignIn = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/adminAuth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token);
                navigate('/admin/adminPanel'); // Navigate to admin dashboard or other protected route
            } else {
                setError(data.error);
            }
        } catch (err) {
            setError('An error occurred during sign-in.');
        }
    };

    return (
        <>
            <section id="title">
                <h1>Table Time</h1>
            </section>

            <section id="SignIn-Welcome">
                <h1>Admin Sign In</h1>
            </section>

            <section id="signInForm">
                <form onSubmit={handleSignIn}>
                    <div>
                        <label>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Sign In</button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </section>

            <section id="backButton">
                <button onClick={handleBackClick} className="back-button">
                    Back
                </button>
            </section>
        </>
    );
};

export default SignIn;
