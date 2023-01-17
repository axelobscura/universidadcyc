import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AddIcon from '@mui/icons-material/Add';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import AttributionIcon from '@mui/icons-material/Attribution';
import BallotIcon from '@mui/icons-material/Ballot';

export default function Menu({ menuIten, categorias }) {

  if(!categorias){
    return(
      <h1>Cargando...</h1>
    )
  }

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent', color: 'white', fontSize: '2rem' }}>
      <nav aria-label="main mailbox folders">
        <List>
          {categorias.map(val => (
            <ListItem disablePadding key={val.id} onClick={() => menuIten(val.titulo)}>
              <ListItemButton>
                <ListItemIcon className='icono-menu'>
                  {
                    val.titulo === "Librería IMCYC" ? <AutoStoriesIcon sx={{ color: '#fff' }} />
                    : val.titulo === "Publicaciones" ? <ImportContactsIcon sx={{ color: '#fff' }} />
                    : val.titulo === "Eventos" ? <AssignmentIndIcon sx={{ color: '#fff' }} />
                    : val.titulo === "Acervo bibliográfico" ? <AutoAwesomeMotionIcon sx={{ color: '#fff' }} />
                    : val.titulo === "Líderes del concreto" ? <AttributionIcon sx={{ color: '#fff' }} />
                    : val.titulo === "Webinars" ? <BallotIcon sx={{ color: '#fff' }} />
                    : <AddIcon sx={{ color: '#fff' }} />
                  }
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}
