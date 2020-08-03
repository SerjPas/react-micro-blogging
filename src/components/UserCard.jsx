import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import UserContext from "../context/UserContext";


const useStyles = makeStyles({
    root: {
        maxWidth: 600,
        marginTop: 52,
        width: 545,
    },
    media: {
        minHeight: 250,
    },
});

export default function UserCard() {
    const userContext = useContext(UserContext)
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={userContext.currentUser.photoURL}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {userContext.currentUser.displayName}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        Email: {userContext.currentUser.email}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}