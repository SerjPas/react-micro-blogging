import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import CreateTweet from "./createTweet";
import TweetList from "./TweetList";

class TweetPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
    };
  }
  componentDidMount() {
    const list = localStorage.getItem("savedList");
    const parsedList = JSON.parse(list);
    this.setState({
      tweets: parsedList,
    });
  }

  addTweet(tweet) {
    if (tweet.text !== "") {
      this.setState(
        (state) => {
          return {
            tweets: [tweet, ...state.tweets],
          };
        },
        () => {
          localStorage.setItem(
            "savedList",
            JSON.stringify(this.state.tweets)
          );
        }
      );
    }
  }
  render() {
    return (
      <div>
        <Container maxWidth="sm">
          <CreateTweet addTweet={(tweet) => this.addTweet(tweet)}></CreateTweet>
          <TweetList tweets={this.state.tweets}></TweetList>
        </Container>
      </div>
    );
  }
}
export default TweetPage;
