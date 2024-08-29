import TimeSlotList from './TimeSlotList';

function ReservationContainer(props) {
  const { reservations } = props;

  return (
    <div className="reservation-container">
      <h3>Available Time Slots</h3>
      <TimeSlotList reservations={reservations} />
    </div>
  );
}

export default ReservationContainer;
