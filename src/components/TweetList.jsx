import React, {useContext} from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import TweetContext from "../context/TweetContext";
import UserContext from "../context/UserContext";

const useStyles = makeStyles({
  root: {
    minWidth: "100%",
    backgroundColor: "#343A40",
    color: "white",
  },
});

const TweetList = () => {
  const classes = useStyles();
  const contex = useContext(TweetContext);
  const userContex = useContext(UserContext);

  return (
      <List className="form-revers">
        {contex.tweets.map((item) => (
            <ListItem key={item.id} style={{ paddingLeft: "0", paddingRight: "0" }} >
              <Card className={classes.root} style={{ minHeight: "100px" }}>
                <CardActions>
                  <span style={{ color: "#6C757D" }}>{item.userName}</span>
                  <span style={{ marginLeft: "auto", color: "#6C757D" }}>
                {item.date}
              </span>
                </CardActions>
                <CardActionArea>
                  <div className="user-image-holder">
                    <img
                        src={userContex.currentUser.photoURL}
                    />
                    <CardContent className="message-bubble">
                      <Typography style = {{wordWrap: "break-word"}}>{item.content}</Typography>
                    </CardContent>
                  </div>

                </CardActionArea>
              </Card>
            </ListItem>
        ))}
      </List>
  );
};
export default TweetList;