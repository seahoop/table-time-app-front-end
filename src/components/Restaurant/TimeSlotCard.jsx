function TimeSlotCard(props) {
  const { time } = props;

  return (
    <div className="time-slot-card">
      <button>{time}</button>
    </div>
  );
}

export default TimeSlotCard;
