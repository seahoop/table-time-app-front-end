import { useEffect, useState } from "react";

function DaysOfTheWeek({ onDayClick }) {
  const [days, setDays] = useState([])

  useEffect(() => {
    const today = new Date()
    const oneWeekFromToday = []
    for (let i = 0; i < 7; i++) {
      const currentDay = new Date(today);
      currentDay.setDate(today.getDate() + i);
      const name = currentDay.toLocaleDateString('en-US', { weekday: 'long' });
      const dateFormatted = currentDay.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' });
      oneWeekFromToday.push({ name, dateFormatted, index: (today.getDay() + i) % 7 });
    }
    setDays(oneWeekFromToday)
  }, [])

  return (
    <div className="days-of-the-week">
      {days.map((day, index) => (
        <button key={index} onClick={() => onDayClick(day.index)}>
          {day.name} {day.dateFormatted}
        </button>
      ))}
    </div>
  )
}

export default DaysOfTheWeek