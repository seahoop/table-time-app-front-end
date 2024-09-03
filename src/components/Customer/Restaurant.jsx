import DaysOfTheWeek from '../Restaurant/DaysOfTheWeek';
import ReservationContainer from '../Restaurant/ReservationContainer';
import RestaurantDetails from '../Restaurant/RestaurantDetails';
import "../Restaurant/RestaurantDashboard.css"
import { useState } from 'react';
import { makeReservation } from '../../services/customer'
import { useNavigate } from 'react-router-dom';

function Restaurant({ restaurant, user }) {
    const [selectedDay, setSelectedDay] = useState(null)

    const navigate = useNavigate()

    const handleDayClick = (day) => {
        setSelectedDay(day)
    }

    const handleAddReservation = async (reservationId) => {
        if (user) {
            await makeReservation(user._id, restaurant._id, reservationId)
        }
        navigate('/customers/dashboard')
    }

    const filteredReservations = selectedDay !== null ? restaurant.reservations.filter((reservation) => {
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
            <ReservationContainer reservations={filteredReservations} user={user} onClickAdd={handleAddReservation} />
        </div>
    );
}

export default Restaurant;