import * as React from 'react';
import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Menu from './components/Menu';
import Contenido from './components/Contenido';

export default function Panel(props) {
  const categorias = props.categorias;
  const [ menu, setMenu ] = useState();

  const menuItem = (val) => {
    setMenu(val);
  }

  return(
    <Layout>
      <Box sx={{ 
        flexGrow: 1, 
        background: '#100839',
        background: 'linear-gradient(27deg, rgba(16,8,57,1) 0%, rgba(10,81,135,1) 30%, rgba(10,81,135,1) 62%, rgba(16,8,57,1) 100%)',
        height: '100vh' 
      }}>
        <Grid container spacing={2}>
          <Grid item xs={1} sx={{ 
            boxShadow: '0 0 10px #000', 
            height: '100vh', 
            background: '#141a21',
            display: 'flex',
            alignItems: 'center'
          }}>
            <Menu menuIten={(val) => menuItem(val)} categorias={categorias} />
          </Grid>
          <Grid item xs={11}>
            <Contenido menu={menu} categorias={categorias} />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  )
}

// Fetching data from the JSON file
import fsPromises from 'fs/promises';
import path from 'path'
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData
  }
}