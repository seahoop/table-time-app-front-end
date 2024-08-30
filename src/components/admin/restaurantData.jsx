import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import restaurantData from '../../assets/restaurants';

const RestaurantDatabase = () => {
    const [query, setQuery] = useState('');
    const [restaurants, setRestaurants] = useState(restaurantData);
    const navigate = useNavigate();

    const handleSearch = (e) => {
        const queryValue = e.target.value;
        setQuery(queryValue);

        if (queryValue) {
            const filteredRestaurants = restaurantData.filter(restaurant =>
                restaurant.name.toLowerCase().includes(queryValue.toLowerCase())
            );
            setRestaurants(filteredRestaurants);
        } else {
            setRestaurants(restaurantData); // Reset to original data if query is empty
        }
    };

    const handleViewProfile = (username) => {
        navigate(`/admin/adminPanel/restaurantProfile/${username}`);
    };

    const handleTerminate = (username) => {
        const updatedRestaurants = restaurants.filter(restaurant => restaurant.username !== username);
        setRestaurants(updatedRestaurants);
        alert(`${username} has been terminated.`);
    };

    const handleBackClick = () => {
        navigate('/admin/adminPanel');
    };

    return (
        <>
            <section id="title">
                <h1>Table Time</h1>
            </section>

            <section id="welcome-Title">
                <h2>Welcome to Table Time Restaurant Database</h2>
            </section>

            <section id="search">
                <input 
                    type="text" 
                    placeholder="Search restaurants..." 
                    value={query} 
                    onChange={handleSearch} 
                />
            </section>

            <section id="restaurantList">
                <ul>
                    {restaurants.map(restaurant => (
                        <li key={restaurant.username}>
                            {restaurant.name}
                            <button onClick={() => handleViewProfile(restaurant.username)}>View Full Profile</button>
                            <button onClick={() => handleTerminate(restaurant.username)}>Terminate</button>
                        </li>
                    ))}
                </ul>
            </section>

            <section id="backToAdminPanel">
                <button onClick={handleBackClick} >
                    Back To Admin Panel
                </button>
            </section>
        </>
    );
}

export default RestaurantDatabase;
