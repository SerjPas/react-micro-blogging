import React, {useState, useContext} from "react";
import {Card, TextField, Button} from "@material-ui/core";
import Error140 from "./Error140";
import TweetContext from "../context/TweetContext";
import {makeStyles} from "@material-ui/styles";
import {db} from "../index";
import UserContext from "../context/UserContext";

const useStyles = makeStyles(() => ({
    root: {
        marginTop: 47,
        border: "2px solid white",
        height: 180,
        color: "white",
        backgroundColor: "#16202C",
    },
    button: {
        position: "relative",
        bottom: -84,
        left: -10,
        backgroundColor: "#007BFF",
        width: 68,
        height: 34,
        borderRadius: 4,
        alignSelf: "flex-end",
    },
}));

const CreateTweet = () => {
    const classes = useStyles();
    const [tweetInput, setTweetInput] = useState("");
    const contex = useContext(TweetContext);
    const userContex = useContext(UserContext);

    const handleOnSubmit = async (event) => {
        if (event) {
            event.preventDefault();
        }

        if (tweetInput !== "") {
            try {
                contex.handleLoad(true)
                await db.ref("tweets").push({
                    id:Date.now() + "",
                    content: tweetInput,
                    date: new Date().toISOString(),
                    userName: userContex.currentUser.id,
                });
                setTweetInput('');
            } catch (error) {
                contex.handleErrorMessage(error.message);
            }
        }
    };

    const onEnterPress = (event) => {
        if (event.keyCode === 13 && event.shiftKey === false) {
            event.preventDefault();
            handleOnSubmit();
        }
    };

    return (
        <Card
            className={classes.root}
        >
            <form className="form" onSubmit={handleOnSubmit}>
                <TextField
                    onKeyDown={onEnterPress}
                    inputProps={{maxLength: 140, style: {color: "white"}}}
                    multiline
                    style={{width: "100%"}}
                    rows={9}
                    className="tweet-input"
                    autoFocus
                    id="tweet"
                    name="tweetInput"
                    placeholder="What you have in mind..."
                    value={tweetInput}
                    onChange={(event) => setTweetInput(event.target.value)}
                    required
                />
                {tweetInput.length === 140 && <Error140/>}
                <Button
                    className={classes.button}
                    disabled={tweetInput.length === 140}
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Tweet
                </Button>
            </form>
        </Card>
    );
};
export default CreateTweet;