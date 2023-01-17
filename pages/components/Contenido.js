import * as React from 'react';
import Layout from './Layout';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Carta from './Carta';
import Grid from '@mui/material/Grid';

export default function Contenido({ menu, categorias }) {

  const contenido = categorias.filter(val => val.titulo === menu);

  if(!contenido){
    return (
      <h2>Loading...</h2>
    )
  }

  return(
    <>
      <Box sx={{ flexGrow: 1, height: '100vh' }}>
        <Typography 
          variant='h1'
          color='white'
          padding='20px 10px'
        >
          {menu}
        </Typography>
        {menu && (
          <>
            <Grid container>
              {contenido[0].contenidos.map(val => (
                <Carta key={val.id} menu={menu} contenido={val}/>
              ))}
            </Grid>
          </>
        )}
        
      </Box>
    </>
  )
}