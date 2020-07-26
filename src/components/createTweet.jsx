import React from "react";
import Card from "@material-ui/core/Card";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
class CreateTweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetInput: "",
    };
  }
  handleOnChange(event) {
    this.setState({tweetInput: event.target.value})
  }

  render() {
    return (
      <Card style = {{width: "600px", height: "180px"}}>
        <form>
          <label htmlFor="tweet"></label>
          <Input
            className="input"
            autoFocus
            id="tweet"
            name="tweetInput"
            placeholder="What you have in mind..."
            value={this.state.tweetInput}
            onChange={(event) => this.handleOnChange(event)}
            inputProps={{ "aria-label": "description" }}
            required
          />
          <Button
            disabled={this.state.tweetInput.length > 140}
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginLeft: "10px" }}
          >
            Tweet
          </Button>
        </form>
      </Card>
    );
  }
}
export default CreateTweet;
