function RestaurantCard(props) {
  const {img, name, about} = props
  return (
    <div className='grid-item'>
      <img src={img} alt={``}/>
      <div>
        <p>
          {name}
        </p>
        <p>
          {about}
        </p>
      </div>
    </div>
  )
}

export default RestaurantCard