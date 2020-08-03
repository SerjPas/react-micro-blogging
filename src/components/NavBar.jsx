import React, {useContext} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Row from "react-bootstrap/Row";
import {Link, Redirect} from "react-router-dom";
import UserContext from "../context/UserContext";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NavBarMenu from "./NavBarMenu";
import MenuItem from "@material-ui/core/MenuItem";

const NavBar = () => {
    const userContext = useContext(UserContext)

    return (

        <Row>
            <AppBar
                style={{
                    backgroundColor: "#343A40",
                    borderRadius: "6px",
                    alignSelf: "center",
                }}
                position="static"
            >
                <Toolbar>
                    {userContext.currentUser && <NavBarMenu />}
                    {userContext.currentUser ?
                        (<div className="logout-button">
                            {<ExitToAppIcon onClick={userContext.handleLogout}/>}
                            {!userContext.currentUser && (<Redirect to={{pathname: '/'}}/>)}
                        </div>) : (<Link className="logout-button" style={{textDecoration: "none", color: "white"}} to="/login">
                            Log in
                        </Link>)}
                </Toolbar>
            </AppBar>
        </Row>
    );
};

export default NavBar;