import RestaurantImage from './RestaurantImage';
import "./RestaurantDetails.css"

function RestaurantDetails(props) {
  const { about, address, image } = props;

  return (
    <div className="restaurant-details">
      <RestaurantImage image={image} />
      <div className="details">
        <p>{about}</p>
        <p>{address}</p>
      </div>
    </div>
  );
}

export default RestaurantDetails;
