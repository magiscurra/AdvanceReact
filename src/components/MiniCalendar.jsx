import React from 'react';

const MiniCalendar = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth(); 
  const date = today.getDate();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay(); // Sunday = 0

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const calendarDays = [];

  for (let i = 0; i < firstDayIndex; i++) {
    calendarDays.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  return (
    <div className="w-90 rounded-2xl shadow-xl p-4 bg-white text-gray-800">
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold">{monthNames[month]} {year}</h2>
      </div>

      <div className="grid grid-cols-7 gap-1 text-sm text-center">
        {dayNames.map((day, idx) => (
          <div key={idx} className="font-semibold text-gray-500">{day}</div>
        ))}

        {calendarDays.map((day, idx) => (
          <div key={idx} className="h-8 flex items-center justify-center">
            {day ? (
              <div className={`w-7 h-7 rounded-full flex items-center justify-center
                ${day === date ? 'bg-green-600 text-white font-bold' : 'text-gray-700'}`}>
                {day}
              </div>
            ) : (
              <div className="w-7 h-7"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniCalendar;
