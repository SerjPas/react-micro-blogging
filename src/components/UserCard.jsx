import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import UserContext from "../context/UserContext";
import CardMedia from "@material-ui/core/CardMedia";
import UploadButtons from "./UploadButton";


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 600,
        marginTop: 52,
        width: 545,
    },
    media: {
        minHeight: 250,
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    card: {
        display: "flex",
    }
}));

export default function UserCard() {

    const userContext = useContext(UserContext)
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea className={classes.root}>
                <div>
                    <CardMedia
                        className={classes.media}
                        image={userContext.currentUser.photoURL}
                        title={userContext.currentUser.displayName}
                    />
                    <div className="upload">
                        <UploadButtons/>
                    </div>
                </div>

                <CardContent>
                    <div style={{display: "flex"}}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {userContext.currentUser.displayName}
                        </Typography>
                    </div>
                    <Typography gutterBottom variant="h5" component="h2">
                        Email: {userContext.currentUser.email}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
