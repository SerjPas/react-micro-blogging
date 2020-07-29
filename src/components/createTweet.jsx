import React, { useState, useContext } from "react";
import { Card, TextField, Button, Grid } from "@material-ui/core";
import Error140 from "./Error140";
import { createTweet } from "../lib/api";
import { trackPromise } from "react-promise-tracker";
import TweetContext from "./TweetContext";

const CreateTweet = () => {
  const [tweetInput, setTweetInput] = useState("");
  const contex = useContext(TweetContext);
 
  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const list = localStorage.getItem("userName");
    const parsedList = JSON.parse(list);
    if (tweetInput !== "") {
      trackPromise(
        createTweet({
          content: tweetInput,
          date: new Date().toISOString(),
          userName: parsedList,
        }).then((respond) => {
              const { data } = respond;
              console.log(data)
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

  return (
        <Card
        className="create-tweet-card"
        style={{
          backgroundColor: "#343A40",
        }}
      >
        <form className="form" onSubmit={handleOnSubmit}>
          <TextField
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
          <Grid container spacing={3}>
            <Grid item xs={10}>
              {tweetInput.length === 140 ? <Error140 /> : <span></span>}
            </Grid>
            <Grid item xs={2}>
              <Button
                className="submit-buttton"
                disabled={tweetInput.length === 140}
                type="submit"
                variant="contained"
                color="primary"
              >
                Tweet
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
  );
}
export default CreateTweet;
