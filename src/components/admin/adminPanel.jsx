import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../src/admin.css';
import welcomeAudio from '../../assets/adminMusic/welcomeAudio.mp3';

const AdminPanel = () => {
    const navigate = useNavigate();
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play().catch(error => {
                console.error('Autoplay was prevented: ', error);
            });
        }
    }, []);

    const handleBackClick = () => {
        navigate('/admin');
    };

    const handleCustomerData = () => {
        navigate('/admin/adminPanel/customerDataBase');
    };

    const handleRestaurantData = () => {
        navigate('/admin/adminPanel/restaurantDataBase');
    }

    return (
        <>

            <section className="title">
                <h1>Table Time</h1>
            </section>

            <section className="welcome">
                <h1>Welcome to Table Time Management Panel</h1>
            </section>

            <section className="RestaurantDataBase">
                <button onClick={handleRestaurantData} className="Restaurant-Data-Base">
                    Restaurant Database
                </button>
            </section>

            <section className="CustomerDataBase">
                <button onClick={handleCustomerData} className="Customer-Data-Base">
                    Customer Database
                </button>
            </section>

            <section className="backButton">
                <button onClick={handleBackClick} className="back-button">
                    Sign Out
                </button>
            </section>

            <audio ref={audioRef} src={welcomeAudio}/>
        </>
    );
}

export default AdminPanel;
