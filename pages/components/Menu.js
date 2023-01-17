import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AddIcon from '@mui/icons-material/Add';

export default function Menu({ menuIten, categorias }) {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent', color: 'white', fontSize: '2rem' }}>
      <nav aria-label="main mailbox folders">
        <List>
          {categorias.map(val => (
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
