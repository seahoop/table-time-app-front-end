import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import restaurantData from '../../assets/restaurants';
import '../../../src/admin.css';

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
        <>
        <section className="restaurantName">
        <h1>Restaurant Profile: {restaurant.name}</h1>
        </section>
        
        <section className="profiles">
        <div>
            
            <p>Username: {restaurant.username}</p>
            <p>Password: {restaurant.password}</p>
            <p>About: {restaurant.about}</p>
            <p>Address: {restaurant.address}</p>
            <img src={restaurant.image} alt={restaurant.name} style={{wclassNameth: '300px', height: '200px'}} />
          
        </div>
        </section>

        <section className="backButton">
              <button onClick={handleBackClick}>Back to Restaurant Database</button>
        </section>

        </>
    );
};

export default RestaurantUserProfile;
