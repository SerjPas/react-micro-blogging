import React, { Component } from "react";
import Container from '@material-ui/core/Container';
import CreateTweet from "./createTweet";

class TweetPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
    };
  }
  render() {
    return (
      <div>
        <Container maxWidth="sm">
          <CreateTweet ></CreateTweet>
        </Container>
      </div>
    );
  }
}
export default TweetPage;
