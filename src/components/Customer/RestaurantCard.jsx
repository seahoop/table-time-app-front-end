import { useNavigate } from "react-router-dom"

function RestaurantCard(props) {
  const { img, name, about, onClick} = props

  return (
    <div className='restaurant-item' onClick={onClick}>
      <img src={img} alt={``}/>
      <div className="restaurant-info">
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