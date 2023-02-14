import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    // padding: "5%"
  },
  leftDiv: {
    width: "47%",
  },
  rightDiv: {
    width: "47%",
  },
  card: {
    margin: "5%",
  }
});

function InfoCard2() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.root}>
          <div className={classes.rightDiv}>
            👗👕👖👒👑
            <br />
            <br />
            We are currently in the midst of development and are looking for feedback from people like you!
            <br />
            <br />
            If you are interested in helping us out, please fill out the form below and we will get back to you as soon as possible!
          </div>
          <div className={classes.leftDiv}>
            <div
              className="tenor-gif-embed"
              data-postid="21137874"
              data-share-method="host"
              data-aspect-ratio="1"
              data-width="100%"
            >
              <a href="https://tenor.com/view/pakai-baju-apa-gladys-online-streaming-tukar-baju-menukar-pakaian-gif-21137874">
                Pakai Baju Apa Gladys GIF
              </a>
              from <a href="https://tenor.com/search/pakai+baju+apa-gifs">Pakai Baju Apa GIFs</a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default InfoCard2;
