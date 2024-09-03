import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../src/admin.css';

const SignUp = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [workEmail, setWorkEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [initiationCode, setInitiationCode] = useState('');
    const [error, setError] = useState(null);

    const handleSignUp = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        if (initiationCode !== 'tabletime123') {
            setError("Invalid initiation code.");
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/adminAuth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    workEmail,
                    hashedPassword: password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Signup successful:', data);
                navigate('/admin'); // Redirect to admin landing page after successful signup
            } else {
                setError(data.error || 'Signup failed');
            }
        } catch (err) {
            console.error('Error during signup:', err);
            setError('An error occurred during signup');
        }
    };

    const handleBackClick = () => {
        navigate('/admin');
    };

    return (
        <>
            <section className="signUp-title">
                <h1>Table Time</h1>
            </section>

            <section className="signUp-Welcome">
                <h1>New Admin Registration System</h1>
            </section>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <section className="signUp-functions">
                <form onSubmit={handleSignUp}>
                    <div>
                        <label>Username:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Work Email:</label>
                        <input
                            type="email"
                            value={workEmail}
                            onChange={(e) => setWorkEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Confirm Password:</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Initiation Code:</label>
                        <input
                            type="text"
                            value={initiationCode}
                            onChange={(e) => setInitiationCode(e.target.value)}
                            required
                        />
                    </div>

                    <section className="signUpButton">
                        <button type="submit" className="sign-up-button">Sign Up</button>
                    </section>
                </form>
            </section>

            <section className="signUp-backButton">
                <button onClick={handleBackClick} className="back-button">
                    Back
                </button>
            </section>
        </>
    );
};

export default SignUp;
