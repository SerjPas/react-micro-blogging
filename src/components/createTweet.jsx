import React from "react";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Error140 from "./Error140";
import Grid from "@material-ui/core/Grid";
import { getUsers } from "../lib/api";

class CreateTweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetInput: "",
    };
  }

  handleOnChange(event) {
    if (event.target.value !== "") {
      this.setState({
        tweetInput: event.target.value,
      });
    }
  }
  handleOnSubmit(event) {
    event.preventDefault();
    if (this.state.tweetInput !== "") {
      this.props.addTweet({
        id: Date.now() + "",
        text: this.state.tweetInput,
        date: new Date().toISOString(),
      });
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
            maxLength={140}
            style={{ width: "100%" }}
            rows={9}
            className="input"
            autoFocus
            id="tweet"
            name="tweetInput"
            placeholder="What you have in mind..."
            value={this.state.tweetInput}
            onChange={(event) => this.handleOnChange(event)}
            required
          />
          <Grid container spacing={3}>
            <Grid item xs>
              {this.state.tweetInput.length == 140 ? (
                <Error140 />
              ) : (
                <span></span>
              )}
            </Grid>
            <Grid item>
              <Button
                className="submit-buttton"
                disabled={this.state.tweetInput.length == 140}
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
