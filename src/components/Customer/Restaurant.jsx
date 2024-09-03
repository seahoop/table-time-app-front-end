import DaysOfTheWeek from '../Restaurant/DaysOfTheWeek';
import ReservationContainer from '../Restaurant/ReservationContainer';
import RestaurantDetails from '../Restaurant/RestaurantDetails';
import { useState } from 'react';
import { makeReservation } from '../../services/customer'
import { useNavigate } from 'react-router-dom';
import './Restaurant.css'

function Restaurant({ restaurant, user, methods }) {
    const [selectedDay, setSelectedDay] = useState(null)

    const navigate = useNavigate()

    const handleDayClick = (day) => {
        setSelectedDay(day)
    }

    const handleAddReservation = async (reservationId) => {
        if (user) {
            const thisCustomer = await makeReservation(user._id, restaurant._id, reservationId)
            console.log(thisCustomer)
            methods.setUser(thisCustomer)
        }
        navigate('/customers/dashboard')
    }

    const filteredReservations = selectedDay !== null ? restaurant.reservations.filter((reservation) => {
        return new Date(reservation.date).getDay() === selectedDay
    }) : restaurant.reservations

    return (
        <div className="restaurant-page">
            <RestaurantDetails
                name={restaurant.name}
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