import * as React from 'react';
import Layout from './Layout';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Carta from './Carta';
import Grid from '@mui/material/Grid';

export default function Contenido({ menu, categorias }) {

  if(!menu){
    return(
      <h2>Cargando...</h2>
    )
  }

  if(!categorias){
    return(
      <h2>Cargando...</h2>
    )
  }

  const contenido = categorias.filter(val => val.titulo === menu);

  if(!contenido){
    return (
      <h2>Loading...</h2>
    )
  }

  return(
    <>
      <Box sx={{ flexGrow: 1, height: '100vh', overflow: 'auto', padding: '30px' }}>
        <Typography 
          variant='h1'
          color='white'
          padding='20px 10px'
        >
          {menu}
        </Typography>
        {menu && (
          <>
            <Grid 
              container 
              direction="row"
              justifyContent="space-between" 
              alignItems="center"
              overflow="auto"
            >
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