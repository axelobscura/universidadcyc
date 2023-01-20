import * as React from 'react';
import Layout from './Layout';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Carta from './Carta';
import Grid from '@mui/material/Grid';

export default function Contenido({ menu, categorias }) {

  if(!menu){
    return(
      <Box sx={{ flexGrow: 1, height: '80vh', overflow: 'auto', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <img src='/logo.svg' alt='tecnológico del cemento y del concreto' title='tecnológico del cemento y del concreto' style={{ 'marginBottom' : '40px', 'width': '320px'}} />
          <Typography 
            variant='h1'
            color='white'
            padding='10px'
          >
          BIENVENIDO 
          </Typography>
          <Typography 
            variant='h3'
            color='white'
            padding='10px'
          >
          INSTITUTO MEXICANO DEL CEMENTO Y DEL CONCRETO A.C.
          </Typography>
          <Typography 
            variant='h1'
            color='white'
            padding='10px'
            sx={{ fontSize: '4rem' }}
          >
          UNIVERSIDAD DEL CEMENTO Y DEL CONCRETO
          </Typography>
      </Box>
      
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
      <Box sx={{ flexGrow: 1, height: '100vh', overflow: 'auto', }}>
        <Typography 
          variant='h1'
          color='white'
          padding='10px'
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