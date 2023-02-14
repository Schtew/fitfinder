import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    height: "50%"
    // padding: "5%"
  },
  leftDiv: {
    width: "47%",
    height: "50%"
  },
  rightDiv: {
    width: "47%",
  },
  card: {
    margin: "5%",
  }
});

function InfoCard() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.root}>
          <div className={classes.leftDiv}>
            <div
              className="tenor-gif-embed"
              data-postid="20345901"
              data-share-method="host"
              data-aspect-ratio="1"
              data-width="100%"
            >
              <a href="https://tenor.com/view/transformation-yoyo-barb-and-star-go-to-vista-del-mar-change-outfit-suit-on-gif-20345901">
                Transformation Yoyo GIF
              </a>
              from <a href="https://tenor.com/search/transformation-gifs">Transformation GIFs</a>
            </div>
          </div>
          <div className={classes.rightDiv}>
            Welcome! 👋
            <br />
            <br />
            We are Fit Finders, a group of students at the Georgia Institute of Technology developing
            a mobile application to help you find the perfect outfit for every situtation. 
            <br />
            <br />
            Whether it be for a job interview, a social event with friends, a date, or just everyday life, we want to help you shine 😎
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default InfoCard;
