import * as React from 'react';
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Header() {
  return (
    <Grid item xs={12} sx={{ margin: '10px 10px' }}>
      <img src='/logo.svg' alt='tecnológico del cemento y del concreto' title='tecnológico del cemento y del concreto' style={{'width': '140px', 'padding':'10px'}} />
    </Grid>
  );
}