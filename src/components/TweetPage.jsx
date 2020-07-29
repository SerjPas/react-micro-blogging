import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import CreateTweet from "./createTweet";
import TweetList from "./TweetList";
import LoadingIndicator from "./Loader";
import TweetContext from "./TweetContext";
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
    setTweets([tweet, ...tweets]);
  };

  const addTweets = (arr) => {
    setTweets(arr);
  };
  const setErrorMessege = (error) => {
    setErrorMessage(error);
  };

  return (
    <TweetContext.Provider
      value={{ tweets, addTweet, addTweets, setErrorMessege }}
    >
      <div>
        <Container maxWidth="sm">
          <CreateTweet/>
          <LoadingIndicator />
          {errorMessage && <h3 className="error">{errorMessage}</h3>}
          <TweetList/>
        </Container>
      </div>
    </TweetContext.Provider>
  );
};

export default TweetPage;
