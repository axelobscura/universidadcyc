import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import MenuHeader from './MenuHeader';

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
    <Grid item xs={12} sx={{ 
      margin: '10px 10px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Grid container spacing={2} sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Grid item xs={8}>
          <img src='/logo.svg' alt='tecnológico del cemento y del concreto' title='tecnológico del cemento y del concreto' style={{'width': '140px', 'padding':'10px'}} />
        </Grid>
        <Grid item xs={4} sx={{
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'center',
        }}>
          <MenuHeader/>
        </Grid>
      </Grid>
    </Grid>
  );
}