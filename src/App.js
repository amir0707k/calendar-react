import React, { useState } from "react";
import DatePicker1 from "./Components/DatePicker";
import './App.css'

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [secondaryDate, setSecondaryDate] = useState(startDate);

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
      <DatePicker1 startDate={startDate} setStartDate={handleStartDateChange} />
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
