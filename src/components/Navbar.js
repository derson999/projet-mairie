import React from 'react';
import './Navbar.css'; // Fichier CSS pour le style
import logo from './logo Mairie.jpg'; // Chemin vers ton logo
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Icône de menu hamburger

const Navbar = () => {
  const [open, setOpen] = React.useState(false); // État pour contrôler l'ouverture du menu

  const toggleDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(!open);
  };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        <ListItem button>
          <ListItemText primary={<a href="#home">Accueil</a>} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={<a href="#services">Services</a>} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={<a href="#about">À propos</a>} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={<a href="#projects">Projets</a>} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={<a href="#contact">Contact</a>} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={<a href="#faq">FAQ</a>} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <AppBar position="static" className="navbar" style={{ backgroundColor: 'white', boxShadow: 'none' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        {/* Logo aligné à gauche */}
        <div className="navbar-logo">
          <img src={logo} alt="Logo Mairie" className="logo" />
        </div>

        {/* Icône de menu hamburger alignée à droite */}
        <IconButton edge="end" onClick={toggleDrawer} style={{ color: 'black' }}>
          <MenuIcon /> {/* Menu hamburger noir */}
        </IconButton>
      </Toolbar>

      {/* Drawer pour le menu */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        {list()}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
