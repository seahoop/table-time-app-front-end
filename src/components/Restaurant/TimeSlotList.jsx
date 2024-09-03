import TimeSlotCard from './TimeSlotCard';
import "./TimeSlotList.css"

function TimeSlotList({ reservations, onClickAdd, user }) {
  const timeSlots = [...reservations]

  function convertTo12Hour(time24) {
    const [hours, minutes] = time24.split(':').map(Number);
    const amPm = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 || 12; // Convert 0 hours to 12
    return `${hours12}:${minutes.toString().padStart(2, '0')} ${amPm}`;
  }

  function convertReservationsTo12Hour(reservations) {
    return reservations.map(reservation => ({
      ...reservation,
      time: convertTo12Hour(reservation.time)
    }));
  }
  const convertedReservations = convertReservationsTo12Hour(timeSlots);


  return (
    <div className="time-slot-list">
      {convertedReservations.map((reservation, index) => (
        <TimeSlotCard key={index} reservation={reservation} user={user} onClickAdd={onClickAdd} />
      ))}
    </div>
  );
}

export default TimeSlotList;
