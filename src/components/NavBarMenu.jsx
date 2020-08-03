import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from "react-router-dom";

const NavBarMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button style={{color: "white"}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Menu
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <Link style={{textDecoration: "none",}} to="/tweets">
                        Home
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link style={{textDecoration: "none",}} to="/profile">
                        Profile
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                </MenuItem>
            </Menu>
        </div>
    );
}
export default NavBarMenu
