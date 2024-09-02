import DaysOfTheWeek from '../Restaurant/DaysOfTheWeek';
import ReservationContainer from '../Restaurant/ReservationContainer';
import RestaurantDetails from '../Restaurant/RestaurantDetails';
import "../Restaurant/RestaurantDashboard.css"
import { useEffect, useState } from 'react';

function Restaurant({ restaurant }) {
    const [selectedDay, setSelectedDay] = useState(null)

    const handleDayClick = (day) => {
        setSelectedDay(day)
    }

    const filteredReservations = selectedDay ? restaurant.reservations.filter((reservation) => {
        return new Date(reservation.date).getDay() === selectedDay
    }) : restaurant.reservations

    return (
        <div className="restaurant-dashboard">
            <h2>{restaurant.name}</h2>
            <h3>{restaurant.about}</h3>
            <RestaurantDetails
                about={restaurant.about}
                address={restaurant.address}
                image={restaurant.image}
            />
            <DaysOfTheWeek onDayClick={handleDayClick} />
            <ReservationContainer reservations={filteredReservations} />
        </div>
    );
}

export default Restaurant;