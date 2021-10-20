import React, { useState } from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import { Slider } from '@mui/material';

const SliderBar = () => {

  const [ value, setValue ] = useState(50); 
  const [ finalValue, setFinalValue ] = React.useState(null);


  return (
    <RangeSlider
      value={value}
      onChange={changeEvent => setValue(changeEvent.target.value)}
      onAfterChange={e => setFinalValue(e.target.value)}
      tooltipPlacement='top'
      tooltipLabel={currentValue => `${currentValue}%`}
      tooltip='on'
    />
  );

};

export default SliderBar;