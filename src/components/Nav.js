import {Button, Grid, MenuItem, Menu} from '@mui/material';
import {KeyboardArrowDown} from '@mui/icons-material';
import { useState } from 'react';
import { Link } from "react-router-dom"

const Nav = ()=>{
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return(
        <Grid container mt={3} sx={{backgroundColor: '#3519d2'}} >
            <Grid item className='nav'>
                <Link to='/'>Home</Link>
                <Link to='/programming'>Programming</Link>
                <Link to='/languages'>Languages</Link>
                <Link to='/marketing'>Marketing</Link>
                <Button
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDown />}
                    sx={{color: 'white'}}
                >
                    More
                </Button>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>
                        <Link to='/design' className='more-link'>Design</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to='/business' className='more-link'>Business</Link>
                    </MenuItem>
                </Menu>
            </Grid>
        </Grid>
    )
}

export default Nav