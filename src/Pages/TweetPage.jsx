import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import CreateTweet from "../components/createTweet";
import TweetList from "../components/TweetList";
import LoadingIndicator from "../components/Loader";
import TweetContext from "../components/TweetContext";
import { getTweets } from "../lib/api";
import { usePromiseTracker } from "react-promise-tracker";

const TweetPage = () => {
  const [tweets, setTweets] = useState([]);
  const [load, setLoad] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const { promiseInProgress } = usePromiseTracker();

  useEffect(() => {
    setInterval(
      () =>
        getTweets()
          .then((response) => {
            const { data } = response;
            setTweets(data.tweets);
            setLoad(false)
          })
          .catch((err) => {
            setErrorMessage(err.message);
          }),
      1000
    );
    
  },[]);

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
          <CreateTweet />
          {promiseInProgress || load ? <LoadingIndicator /> : ""}
          {errorMessage && <h3 className="error">{errorMessage}</h3>}
          <TweetList />
        </Container>
      </div>
    </TweetContext.Provider>
  );
};

export default TweetPage;
