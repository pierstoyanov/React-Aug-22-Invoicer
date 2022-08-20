import React from "react"
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip  from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";


const UserMenu = ({navigate, handleLogout}) => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    
    //TODO
    handleCloseUserMenu()
    const handleProfile = () => {
        handleCloseUserMenu()
    }

    const userSettings = [
    { 
        item:'Profile', 
        handler: handleProfile
    }, 
    {
        item: 'Logout',
        handler: handleLogoutNavbar
    }
    ];

    const handleLogoutNavbar = () => {
        handleCloseUserMenu()
        handleLogout()
    }

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    
    
    return (
        <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
        </Tooltip>
        <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
        >
        {/* //onClick={userSettings.handler()  }*/}
        {userSettings.map((setting) => (
            <MenuItem key={setting.item} onClick={setting.handler}>
            <Typography textAlign="center" >{setting.item}</Typography>
            </MenuItem>
        ))}
        </Menu>
        </Box>
)}

export default UserMenu