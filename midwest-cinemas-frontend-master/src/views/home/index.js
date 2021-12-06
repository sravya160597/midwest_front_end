import React, {useState} from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Mcard from './Mcard';
import Section from './Section';
import { useHistory } from 'react-router-dom';
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Navbar from './Navbar'
import NavTab from './NavTab'
import { Book, Shop2, PhotoAlbum, Phone, Login, Dashboard } from '@mui/icons-material'

export default function Home() {
  const history = useHistory();
  const [drawer, toggleDrawer] = useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
     <Navbar />
     <Section />
   <NavTab />

      <Drawer
        anchor={'left'}
        open={drawer}
        onClose={() => toggleDrawer(false)}
        >
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => toggleDrawer(false)}
            onKeyDown={() => toggleDrawer(false)}
            >
            <List>
                <ListItem onClick={() => history.push('/')} button>
                    <ListItemIcon>
                        <Dashboard />
                    </ListItemIcon>
                    <ListItemText primary={'Home'} />
                </ListItem>
                <ListItem onClick={() => history.push('/login')} button>
                    <ListItemIcon>
                        <Login />
                    </ListItemIcon>
                    <ListItemText primary={'Login'} />
                </ListItem>
            </List>
            </Box>
    </Drawer>

    </Box>
 );
}