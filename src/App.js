import './App.css'
import React, { useState } from "react";
import DatePicker1 from "./Components/DatePicker";

function App() {
  const today = new Date();
  const [startDate, setStartDate] = useState(today);
  const [secondaryDate, setSecondaryDate] = useState(today);

  const handleSecondaryDateChange = (date) => {
    if (date >= startDate) {
      setSecondaryDate(date);
    }
  };

  const handleStartDateChange = (date) => {
    if (date <= secondaryDate) {
      setStartDate(date);
    }
  };

  return (
    <div className="app">
      <DatePicker1
        startDate={startDate}
        setStartDate={handleStartDateChange}
        minDate={today} 
        maxDate={secondaryDate} 
      />
      <DatePicker1
        startDate={secondaryDate}
        setStartDate={handleSecondaryDateChange}
        minDate={startDate}
        maxDate={secondaryDate}
      />
    </div>
  );
}

export default App;
