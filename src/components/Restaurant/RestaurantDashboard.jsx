import DaysOfTheWeek from './DaysOfTheWeek';
import ReservationContainer from './ReservationContainer';
import RestaurantDetails from './RestaurantDetails';
import "./RestaurantDashboard.css"

function RestaurantDashboard(props) {
  const { restaurant } = props;

  return (
    <div className="restaurant-dashboard">
      <h2>{restaurant.name}</h2>
      <h3>{restaurant.about}</h3>
      <RestaurantDetails
        about={restaurant.about}
        address={restaurant.address}
        image={restaurant.image}
      />
      <DaysOfTheWeek />
      <ReservationContainer reservations={restaurant.reservations} />
    </div>
  );
}

export default RestaurantDashboard;