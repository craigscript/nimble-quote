import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import {Field} from 'redux-form';
import 'react-datepicker/dist/react-datepicker.css';


const DatePickerFieldComp = ({input, placeholder}) => {
  const dateFormat = 'DD-MM-YYYY';

  const handleChange = (date) => {
    input.onChange(moment(date).format(dateFormat))
  };

  return (
    <div className="form-group">
      <DatePicker
        {...input}
        placeholderText={placeholder}
        className="form-control"
        dateFormat={dateFormat}
        selected={input.value ? moment(input.value, dateFormat) : null}
        onChange={handleChange}
        label={placeholder}
      />
    </div>
  )
};

export const DatePickerField = ({id, placeholder}) => {
  return (
    <Field
      name={id}
      placeholder={placeholder}
      component={DatePickerFieldComp}
    />
  );
};
