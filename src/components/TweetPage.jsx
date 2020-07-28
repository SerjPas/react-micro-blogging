import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import CreateTweet from "./createTweet";
import TweetList from "./TweetList";
import LoadingIndicator from "./Loader";
import { getTweets } from "../lib/api";
import { trackPromise } from "react-promise-tracker";

class TweetPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      errorMessage: "",
    };
  }
  componentDidMount() {
    trackPromise(
      getTweets()
        .then((response) => {
          const { data } = response;
          this.setState({
            tweets: data.tweets,
          });
        })
        .catch((err) => {
          this.setState({ errorMessage: err.message });
        })
    );
  }

  addTweet(tweet) {
    if (tweet.text !== "") {
      this.setState((state) => {
        return {
          tweets: [tweet, ...state.tweets],
        };
      });
    }
  }
  addTweets(arr) {
    this.setState({
      tweets: arr,
    });
  }

  setErrorMessege(error) {
    this.setState({
      errorMessage: error,
    });
  }

  render() {
    return (
      <div>
        <Container maxWidth="sm">
          <CreateTweet
            setErrorMessege={(error) => this.setErrorMessege(error)}
            addTweets={(tweets) => this.addTweets(tweets)}
            addTweet={(tweet) => this.addTweet(tweet)}
          ></CreateTweet>
          <LoadingIndicator />
          {this.state.errorMessage && (
            <h3 className="error"> {this.state.errorMessage}</h3>
          )}
          <TweetList tweets={this.state.tweets}></TweetList>
        </Container>
      </div>
    );
  }
}
export default TweetPage;
