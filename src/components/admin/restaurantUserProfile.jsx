import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import restaurantData from '../../assets/restaurants';

const RestaurantUserProfile = () => {
    const { username } = useParams();
    const navigate = useNavigate();
    const restaurant = restaurantData.find(r => r.username === username);

    if (!restaurant) {
        return <p>Restaurant not found!</p>;
    }

    const handleBackClick = () => {
        navigate('/admin/adminPanel/restaurantDatabase');
    };

    return (
        <div>
            <h1>Restaurant Profile: {restaurant.name}</h1>
            <p>Username: {restaurant.username}</p>
            <p>Password: {restaurant.password}</p>
            <p>About: {restaurant.about}</p>
            <p>Address: {restaurant.address}</p>
            <img src={restaurant.image} alt={restaurant.name} style={{width: '300px', height: '200px'}} />
            <button onClick={handleBackClick}>Back to Restaurant Database</button>
        </div>
    );
};

export default RestaurantUserProfile;
