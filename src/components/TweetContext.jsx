import React from "react";

const TweetContext = React.createContext({
  tweets: [],
  addTweet: () => {},
  addTweets: () => {},
  setErrorMessege: () => {},
});

export default TweetContext;
