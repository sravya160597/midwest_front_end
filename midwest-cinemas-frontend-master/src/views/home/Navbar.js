import React,{useState} from 'react'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { useHistory } from 'react-router-dom';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Drawer from '@mui/material/Drawer'
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './Navbar.css';
import { Logout } from '@mui/icons-material';

const Navbar = () => {
    const history = useHistory();
   const [drawer, toggleDrawer] = useState(false);
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  const options = [
    { label: 'California', id: 1 },
    { label: ' Oregon', id: 2 },
    { label: ' Nevada', id: 3 },
  ];
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    const doLogout = () => {
      localStorage.removeItem('userData')
      window.location='/'
    }

    return (
        <div>
             <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div"  >
          <Button onClick={() => history.push('/')} color="inherit" size="large">Midwest Cinemas</Button>
          </Typography>
          <Typography className="navtab" onClick={() => history.push('/')} >HOME</Typography>
          <Typography className="navtab" >MOVIES</Typography>
          <Typography className="navtab" onClick={() => history.push('/cinemas')} >THEATRES</Typography>
          <Typography className="navtab">EVENTS</Typography>
          <Autocomplete
  id="combo-box-demo"
  options={options}
  autoHighlight
  sx={{ width: 250 }}
  className="location_dropdown"
  renderInput={(params) => <TextField {...params} label="Select your location" />}
/>
          <Search>
             <SearchIconWrapper>
               <SearchIcon />
             </SearchIconWrapper>
             <StyledInputBase
               placeholder="Search…"
               inputProps={{ 'aria-label': 'search' }}
             />
           </Search>
           {localStorage.getItem('userData') && (
            <div>
                <Button onClick={() => doLogout()} color="inherit">Logout</Button>
              </div>
           )}
           
            {!localStorage.getItem('userData') && (
              <Button onClick={() => history.push('/login')} color="inherit">Login</Button>
            )}
        </Toolbar>
      </AppBar>
        </div>
    )
}

export default Navbar
