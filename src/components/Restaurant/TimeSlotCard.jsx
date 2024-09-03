import "./TimeSlotCard.css"
import AddButton from "../Button/AddButton";

function TimeSlotCard({ onClickAdd, user, reservation }) {
  const { time, guests, _id } = reservation
  return (
    <div className="time-slot-card">
      <img src="https://icons.veryicon.com/png/o/miscellaneous/youyinzhibo/guest.png" alt="guest-icon" />
      <p>{guests}</p>
      <p>{time}</p>
      {user ? <AddButton onClickAdd={() => onClickAdd(_id)} /> : <></>}
    </div>
  );
}

export default TimeSlotCard;
