import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

export default function MenuHeader() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        //onClick={handleClick}
        style={{
          padding: 0
        }}
      >
        <SearchIcon
          sx={{
            color: '#fff',
            fontSize: 30,
            padding: 0,
          }}
        />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Perfil de usuario</MenuItem>
        <MenuItem onClick={handleClose}>Mi cuenta</MenuItem>
        <MenuItem onClick={handleClose}>Salir</MenuItem>
      </Menu>
      <Button
        onClick={handleClick}
        style={{
          padding: 0
        }}
      >
        <AccountCircleIcon
          sx={{
            color: '#fff',
            fontSize: 30,
          }}
        />
      </Button>
      <Button
        onClick={handleClick}
        style={{
          padding: 0
        }}
      >
        <MenuIcon
          sx={{
            color: '#fff',
            fontSize: 30,
          }}
        />
      </Button>
    </div>
  );
}