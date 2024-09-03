import TimeSlotList from './TimeSlotList';

function ReservationContainer({ reservations, onClickAdd, user }) {

  return (
    <div className="reservation-container">
      <h3>Available Time Slots</h3>
      <TimeSlotList reservations={reservations} user={user} onClickAdd={onClickAdd} />
    </div>
  );
}

export default ReservationContainer;
