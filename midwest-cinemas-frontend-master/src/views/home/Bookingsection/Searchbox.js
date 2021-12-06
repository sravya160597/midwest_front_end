import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
const Searchbox = () => {
    const history = useHistory();
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      }));
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
          marginTop:'10px',
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '32ch',
            '&:focus': {
              width: '32ch',
            },
          },
        },
      }));
    return (
       <>
       <div className="flex">
        <div className="search_container flex">
            <Search color="secondary">
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
            color="secondary"
              placeholder="Search by Cinema,movie"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Button variant="contained" color="success" onClick={() => history.push('/cinemas')} >Schedule Your Movie</Button>
          </div>
          <h5 className="location_box">Showing cinemas in CALIFORNIA Change City?</h5>
          </div>
       </>
    )
}

export default Searchbox
