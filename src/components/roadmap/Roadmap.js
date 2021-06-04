import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    height: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

const marks = [
  {
    value: 0,
    label: 'Q1 2022',
  },
  {
    value: 20,
    label: 'Q2 2022',
  },
  {
    value: 40,
    label: 'Q3 2022',
  },
  {
    value: 60,
    label: 'Q4 2022',
  },
];

export default function VerticalSlider() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography id="vertical-slider" gutterBottom>
        Road map
      </Typography>
      <div className={classes.root}>
        <Slider
          orientation="vertical"
          valueLabelDisplay="auto"
          defaultValue={0}
          aria-labelledby="vertical-slider"
          getAriaValueText={valuetext}
          step={10}
          marks={marks}
        />
      </div>
    </React.Fragment>
  );
}