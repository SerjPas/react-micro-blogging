import React, {useContext} from "react";
import List from "@material-ui/core/List";
import TweetContext from "../context/TweetContext";
import Tweet from "./Tweet";

const TweetList = () => {
  const context = useContext(TweetContext);

  return (
      <List className="form-revers">
        {context.tweets.map((item) => (
            <Tweet key={item.id} tweet={item} />
        ))}
      </List>
  );
};
export default TweetList;