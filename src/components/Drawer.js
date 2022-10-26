import {Button, IconButton, Grid,Link, Drawer, Box, Collapse} from '@mui/material';
import {Menu, KeyboardArrowDown} from '@mui/icons-material';
import { useState } from 'react';

const Drawers = ()=>{
    const [open, setOpen] = useState(false);
    const [more, setMore] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);
    const menuState = Boolean(anchorEl);
    const handleClick = () => {
      setMore(!more);
    };
    const toggleNav = (action)=>(event)=>{
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
          }
        setOpen(action);
    }

    return(
        <>
          <IconButton onClick={toggleNav(true)}>
              <Menu />
          </IconButton>
          <Drawer
            anchor='right'
            open={open}
            onClose={toggleNav(false)}
          >
            <Box className='link-drawer'>
              <Link href='/'>Home</Link>
              <Link href='/'>Programming</Link>
              <Link href='/'>Languages</Link>
              <Link href='/'>Marketing</Link>              
            </Box>
            <Button
              onClick={handleClick}
              endIcon={<KeyboardArrowDown />}
            >
              More
            </Button>
            <Collapse in={more} timeout="auto" unmountOnExit>
              <Box className='link-drawer'>
                <Link to='/design'>Design</Link>
                <Link to='/business'>Business</Link>
              </Box>
            </Collapse>
            
            <Button variant='contained' href='/login'>Sign In</Button>


          </Drawer>
        </>
    )
}

export default Drawers;