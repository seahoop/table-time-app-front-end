import RestaurantImage from './RestaurantImage';

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
