import React, { useState, useContext } from "react";
import { Card, TextField, Button } from "@material-ui/core";
import Error140 from "./Error140";
import { createTweet } from "../lib/api";
import { trackPromise } from "react-promise-tracker";
import TweetContext from "./TweetContext";
import { makeStyles } from "@material-ui/styles";

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

  const handleOnSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }
    const list = localStorage.getItem("userName");
    const parsedList = JSON.parse(list);
    if (tweetInput !== "") {
      trackPromise(
        createTweet({
          content: tweetInput,
          date: new Date().toISOString(),
          userName: parsedList,
        })
          .then((respond) => {
            const { data } = respond;
            console.log(data);
            contex.addTweet(data);
          })
          .catch((err) => {
            contex.setErrorMessege(err.message);
          })
      );
    }
    //clear input after submit
    setTweetInput("");
  };

  const onEnterPress = (event) => {
    if (event.keyCode === 13 && event.shiftKey === false) {
      event.preventDefault();
      handleOnSubmit();
    }
  };

  return (
    <Card
      // className="create-tweet-card"
      className={classes.root}
    >
      <form className="form" onSubmit={handleOnSubmit}>
        <TextField
          onKeyDown={onEnterPress}
          inputProps={{ maxLength: 140, style: { color: "white" } }}
          multiline
          style={{ width: "100%" }}
          rows={9}
          className="input"
          autoFocus
          id="tweet"
          name="tweetInput"
          placeholder="What you have in mind..."
          value={tweetInput}
          onChange={(event) => setTweetInput(event.target.value)}
          required
        />
        {tweetInput.length === 140 ? <Error140 /> : <span></span>}
        <Button
          // className="submit-buttton"
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
