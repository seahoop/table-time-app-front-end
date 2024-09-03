import "./TimeSlotCard.css"
import AddButton from "../Button/AddButton";

function TimeSlotCard({time, onClickAdd, user, reservationId}) {
  return (
    <div className="time-slot-card">
      <p>{time}</p>
      {user ? <AddButton onClickAdd={() => onClickAdd(reservationId)} /> : <></>}
    </div>
  );
}

export default TimeSlotCard;
