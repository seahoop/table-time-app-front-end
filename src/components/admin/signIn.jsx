import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import audio1 from '../../assets/adminMusic/youtubeAudio.mp3';
import '../../../src/admin.css';

const SignIn = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    // Audio sound below
    const audio1Ref = useRef(null);

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

                // Attempt to play audio first
                if (audio1Ref.current) {
                    audio1Ref.current.play().then(() => {
                        // After audio starts playing, navigate to the AdminPanel
                        setTimeout(() => {
                            navigate('/admin/adminPanel');
                        }, 3000); // Adjust the delay as needed
                    }).catch(error => {
                        console.error('Failed to play audio:', error);
                        // If audio playback fails, still navigate to AdminPanel
                        navigate('/admin/adminPanel');
                    });
                } else {
                    // If there's no audio reference, directly navigate
                    navigate('/admin/adminPanel');
                }
            } else {
                setError(data.error);
            }
        } catch (err) {
            setError('An error occurred during sign-in.');
        }
    };

    return (
        <>
            <section className="signIn-title">
                <h1>Table Time</h1>
            </section>

            <section className="SignIn-Welcome">
                <h1>Admin Sign In System</h1>
            </section>

            <section className="signInForm">
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

            <section className="signIn-backButton">
                <button onClick={handleBackClick} className="back-button">
                    Back
                </button>
            </section>

            <audio ref={audio1Ref} src={audio1} />
        </>
    );
};

export default SignIn;
