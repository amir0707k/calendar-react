import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePicker1 = ({ startDate, setStartDate, minDate }) => {
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      minDate={minDate} 
    />
  );
};

export default DatePicker1;
