import React, { useEffect } from "react"
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip  from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import { useUserAuth } from '../../../Contexts/UserAuthContext';

const UserMenu = ({navigate, logOut, handleLogout, user}) => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const { isAuthenticated, setIsAuthenticated } = React.useState();
    const { getAuthenticateUser, currentUser, authentication } = useUserAuth();


    const handleProfile = () => {
        handleCloseUserMenu()
    }


    const handleLogoutNavbar = () => {
        handleCloseUserMenu()
        handleLogout()
    }

    const userSettings = [
    {
        item: 'Logout',
        handler: handleLogoutNavbar
    }
    ];


    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    
    return (
        <>
        {/* {{isAuthenticated} && */}
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
            <MenuItem key={setting.item} onClick={handleLogout}>
            <Typography textAlign="center" >{setting.item}</Typography>
            </MenuItem>
        ))}
        </Menu>
        </Box>
        {/* } */}
        </>
)}

export default UserMenu
