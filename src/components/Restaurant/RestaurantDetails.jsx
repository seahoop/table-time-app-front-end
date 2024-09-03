import RestaurantImage from './RestaurantImage';

function RestaurantDetails(props) {
  const { about, address, image, name } = props;

  return (
    <div className="restaurant-details">
      <div className="details">
        <p>{name}</p>
        <p>{about}</p>
        <p>{address}</p>
      </div>
      <img src={image} alt="Restaurant" />
    </div>
  );
}

export default RestaurantDetails;
