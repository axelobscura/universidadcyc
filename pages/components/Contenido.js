import * as React from 'react';
import Layout from './Layout';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function Contenido({ menu }) {
  return(
    <Layout>
      <Box sx={{ flexGrow: 1, background: '#001e3c', height: '100vh' }}>
        <Typography 
          variant='h1'
          color='powderblue'
          padding='20px'
        >
          {menu}
        </Typography>
      </Box>
    </Layout>
  )
}