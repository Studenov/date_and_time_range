import React from 'react';
import { DatePicker } from 'antd';
import connectField from 'uniforms/connectField';
import { func, object, arrayOf } from 'prop-types';

const DateRange = ({ onChange, value }) => (
  <DatePicker.RangePicker
    onChange={dates => onChange(dates)}
    value={value}
    style={{
      margin: 2,
      width: 338
    }}
  />
);

export const DatePickerConnect = connectField(DateRange);

DateRange.propTypes = {
  onChange: func.isRequired,
  value: arrayOf(object).isRequired
};
