function DaysOfTheWeek() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div className="days-of-the-week">
      {days.map((day) => (
        <button key={day}>{day}</button>
      ))}
    </div>
  );
}

export default DaysOfTheWeek;
