import TimeSlotCard from './TimeSlotCard';

function TimeSlotList(props) {
  const { reservations } = props;

  const availableTimeSlots = ['12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM']; // Example slots

  return (
    <div className="time-slot-list">
      {availableTimeSlots.map((slot) => (
        <TimeSlotCard key={slot} time={slot} />
      ))}
    </div>
  );
}

export default TimeSlotList;
