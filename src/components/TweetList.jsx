import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import "../App.css";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 600,
    backgroundColor: "#343A40",
    color: "white"
  }
});

const TweetList = (props) => {
  const classes = useStyles();
  return (
    <List>
      {props.tweets.map((item) => (
        <ListItem style={{paddingLeft:"0", paddingRight:"0"}} key={item.id} dense>
          <Card className={classes.root} style = {{width: "600px", minHeight: "100px"}}>
            <CardActions>
              <span>yonatan</span>
              <span style={{marginLeft:"auto"}}>{item.date.toLocaleString()}</span>
            </CardActions>
            <CardActionArea>
              <CardContent>
                <Typography>{item.text}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </ListItem>
      ))}
    </List>
  );
};
export default TweetList;
