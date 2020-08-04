import React, {useContext, useEffect, useState} from "react";
import ListItem from "@material-ui/core/ListItem";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import {makeStyles} from "@material-ui/core/styles";
import UserContext from "../context/UserContext";
import * as firebase from "firebase";

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
    const userContext = useContext(UserContext);

    useEffect(() => {
        firebase
            .firestore()
            .collection("users")
            .doc(props.tweet.id)
            .get()
            .then((result) => {
                const user = result.data();
                setUser(user);
                console.log(user, "user from db")
            });
    }, [props.tweet.id]);

    const isCurrentUser =
        userContext.currentUser && user && userContext.currentUser.id === user.id;

    return (
        <ListItem style={{paddingLeft: "0", paddingRight: "0"}}>
            <Card className={classes.root } style={{minHeight: "100px"}}>
                <CardActions>
                    <span style={{color: "#6C757D"}}>{props.tweet.userName}</span>
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
                            <p>{props.tweet.content}</p>
                        </CardContent>
                    </div>
                </CardActionArea>
            </Card>
        </ListItem>
    );
};
export default Tweet;