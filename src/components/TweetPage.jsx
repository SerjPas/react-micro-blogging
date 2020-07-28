import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import CreateTweet from "./createTweet";
import TweetList from "./TweetList";
import LoadingIndicator from "./Loader";
import { getTweets } from "../lib/api";
import { trackPromise } from "react-promise-tracker";

const TweetPage = () => {
  const [tweets, setTweets] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    trackPromise(
      getTweets()
        .then((response) => {
          const { data } = response;
          setTweets(data.tweets);
        })
        .catch((err) => {
          setErrorMessage(err.message);
        })
    );
  }, []);

  const addTweet = (tweet) => {
    setTweets([...tweets, tweet]);
  };

  const addTweets = (arr) => {
    setTweets(arr);
  };
  const setErrorMessege = (error) => {
    setErrorMessage(error);
  };

  return (
    <div>
      <Container maxWidth="sm">
        <CreateTweet
          setErrorMessege={setErrorMessege}
          addTweets={addTweets}
          addTweet={addTweet}
        ></CreateTweet>
        <LoadingIndicator />
        {errorMessage && <h3 className="error">{errorMessage}</h3>}
        <TweetList tweets={tweets}></TweetList>
      </Container>
    </div>
  );
};

export default TweetPage;
