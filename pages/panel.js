import * as React from 'react';
import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Menu from './components/Menu';
import Contenido from './components/Contenido';

export default function Panel() {
  const [ menu, setMenu ] = useState();

  const menuItem = (e) => {
    setMenu(e.target.innerText);
  }

  return(
    <Layout>
      <Box sx={{ flexGrow: 1, background: '#001e3c', height: '100vh' }}>
        <Grid container spacing={2}>
          <Grid item xs={3} sx={{ 
            boxShadow: '0 0 10px #000', 
            height: '100vh', 
            background: '#141a21',
            display: 'flex',
            alignItems: 'center'
          }}>
            <Menu menuIten={(e) => menuItem(e)} />
          </Grid>
          <Grid item xs={9}>
            <Contenido menu={menu} />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  )
}