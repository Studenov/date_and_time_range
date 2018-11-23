import React from 'react';
import AutoForm from 'uniforms/AutoForm';

import { schema } from '../lib/schema';
import { DatePickerConnect } from './DateRangePicker';
import { TimeRangeConnect } from './TimeRangePicker';

import 'antd/dist/antd.css';

export const Application = () => (
  <AutoForm schema={schema}>
    <DatePickerConnect name="datePicker" />
    <TimeRangeConnect name="timePicker" />
  </AutoForm>
);