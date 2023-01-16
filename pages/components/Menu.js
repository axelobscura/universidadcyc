import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AddIcon from '@mui/icons-material/Add';

const menu = [
  {
    id: 0,
    titulo: "Librería IMCYC"
  },
  {
    id: 1,
    titulo: "Publicaciones"
  },
  {
    id: 3,
    titulo: "Eventos"
  },
  {
    id: 4,
    titulo: "Acervo bibliográfico"
  },
  {
    id: 5,
    titulo: "Líderes del concreto"
  },
  {
    id: 6,
    titulo: "Webinars"
  },
]

export default function Menu({ menuIten }) {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent', color: 'white', fontSize: '2rem' }}>
      <nav aria-label="main mailbox folders">
        <List>
          {menu.map(val => (
            <ListItem disablePadding key={val.id} onClick={menuIten}>
              <ListItemButton>
                <ListItemIcon>
                  <AddIcon sx={{ color: '#fff' }} />
                </ListItemIcon>
                <ListItemText primary={val.titulo} className='lista' />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}