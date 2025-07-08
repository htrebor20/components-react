import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './datePicker.sass'; 

import { DatePickerProps } from './types';

function DatePicker({label, placeholder, selectedDate, onChange, helperText, required = false,}: DatePickerProps) {
  return (
    <div className="datepicker-wrapper">
      {label && (
        <label>
          {label} {required && <span style={{ color: 'red' }}>*</span>}
        </label>
      )}
      <ReactDatePicker
        selected={selectedDate}
        onChange={onChange}
        placeholderText={placeholder}
        dateFormat="dd/MM/yyyy"
        className="custom-datepicker-input"
      />
      {helperText && <small>{helperText}</small>}
    </div>
  );
}

export default DatePicker;
