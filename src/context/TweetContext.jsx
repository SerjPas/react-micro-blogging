import React from "react";

const TweetContext = React.createContext({
    tweets: [],
    handleLoad: () => {},
    addTweet: () => {},
    addTweets: () => {},
    handleErrorMessage: () => {},
});

export default TweetContext;