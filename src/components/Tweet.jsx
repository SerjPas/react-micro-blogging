import React, {useContext, useEffect, useState} from "react";
import ListItem from "@material-ui/core/ListItem";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import {makeStyles} from "@material-ui/core/styles";
import * as firebase from "firebase";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        minWidth: "100%",
        backgroundColor: "#343A40",
        color: "white",
    },

});

const Tweet = (props) => {
    const classes = useStyles();
    const [user, setUser] = useState(null)

    useEffect(() => {
        firebase
            .firestore()
            .collection("users")
            .doc(props.tweet.userName)
            .get()
            .then((result) => {
                const user = result.data();
                setUser(user);
            });
    }, [props.tweet.userName, user]);
    //
    // const isCurrentUser =
    //     userContext.currentUser && user && userContext.currentUser.id === user.id;

    return (
        <ListItem style={{paddingLeft: "0", paddingRight: "0"}}>
            <Card className={classes.root } style={{minHeight: "100px"}}>
                <CardActions>
                    <span style={{color: "#6C757D"}}>{user ? user.displayName ? user.displayName : user.email : ""}</span>
                    <span style={{marginLeft: "auto", color: "#6C757D"}}>{props.tweet.date}</span>
                </CardActions>
                <CardActionArea>
                    <div className="user-image-holder"
                    >
                        <img
                            src={user ? user.photoURL : ""}
                            alt={user ? user.displayName : ""}
                        />
                        <CardContent>
                            <Typography>{props.tweet.content}</Typography>
                        </CardContent>
                    </div>
                </CardActionArea>
            </Card>
        </ListItem>
    );
};
export default Tweet;