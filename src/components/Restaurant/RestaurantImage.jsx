function RestaurantImage(props) {
  const { image } = props;

  return (
    <div className="restaurant-image">
      <img src={image} alt="Restaurant" />
    </div>
  );
}

export default RestaurantImage;
