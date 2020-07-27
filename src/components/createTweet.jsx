import React from "react";
import { Card, TextField, Button, Grid } from "@material-ui/core";
import Error140 from "./Error140";
import { createTweet, getTweets } from "../lib/api";
import { trackPromise } from "react-promise-tracker";

class CreateTweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetInput: "",
    };
  }

  async handleOnSubmit(event) {
    event.preventDefault();
    if (this.state.tweetInput !== "") {
      trackPromise(
        createTweet({
          content: this.state.tweetInput,
          date: new Date().toISOString(),
          userName: "Serhii",
        })
          .catch((err) => {
            this.props.setErrorMessege(err.message);
          })
          .then(() => {
            // debugger;
            getTweets().then((respond) => {
              const { data } = respond;
              this.props.addTweets(data.tweets);
            });
          })
          .catch((err) => {
            this.ptops.setErrorMessege(err.message);
          })
      );
    }
    //clear input after submit
    this.setState({
      tweetInput: "",
    });
  }

  render() {
    return (
      <Card
        style={{
          border: "2px solid white",
          width: "600px",
          height: "180px",
          color: "white",
          backgroundColor: "#343A40",
        }}
      >
        <form className="form" onSubmit={(event) => this.handleOnSubmit(event)}>
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
            value={this.state.tweetInput}
            onChange={(event) =>
              this.setState({ tweetInput: event.target.value })
            }
            required
          />
          <Grid container spacing={3}>
            <Grid item xs={10}>
              {this.state.tweetInput.length === 140 ? (
                <Error140 />
              ) : (
                <span></span>
              )}
            </Grid>
            <Grid item xs={2}>
              <Button
                className="submit-buttton"
                disabled={this.state.tweetInput.length === 140}
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
}
export default CreateTweet;
