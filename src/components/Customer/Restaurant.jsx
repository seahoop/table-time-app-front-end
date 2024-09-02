import DaysOfTheWeek from '../Restaurant/DaysOfTheWeek';
import ReservationContainer from '../Restaurant/ReservationContainer';
import RestaurantDetails from '../Restaurant/RestaurantDetails';
import "../Restaurant/RestaurantDashboard.css"
import { useState } from 'react';

function Restaurant({ restaurant }) {
    const [thisRestaurant, setThisRestaurant] = useState(restaurant)

    return (
        <div className="restaurant-dashboard">
            <h2>{thisRestaurant.name}</h2>
            <h3>{thisRestaurant.about}</h3>
            <RestaurantDetails
                about={thisRestaurant.about}
                address={thisRestaurant.address}
                image={thisRestaurant.image}
            />
            <DaysOfTheWeek />
            <ReservationContainer reservations={thisRestaurant.reservations} />
        </div>
    );
}

export default Restaurant;