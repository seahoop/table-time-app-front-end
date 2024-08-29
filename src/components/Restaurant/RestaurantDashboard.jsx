import DaysOfTheWeek from './DaysOfTheWeek';
import ReservationContainer from './ReservationContainer';
import RestaurantDetails from './RestaurantDetails';

function RestaurantDashboard(props) {
  const { restaurant, reservations } = props;

  return (
    <div className="restaurant-dashboard">
      <h2>{restaurant.name}</h2>
      <RestaurantDetails
        about={restaurant.about}
        address={restaurant.address}
        image={restaurant.image}
      />
      <DaysOfTheWeek />
      <ReservationContainer reservations={reservations} />
    </div>
  );
}

export default RestaurantDashboard;