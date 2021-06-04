import {
  CardActionArea,
  CardMedia,
  CardContent,
  Avatar,
  Button,
  Card,
} from "@material-ui/core";
import { useState } from "react";

import ImagemCar from "../../assets/images/Mask Group 13.png";
import Logotipo from "../../assets/images/logotipo.png";
import { useStyles } from "./style";

const CarCarousel = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.headerContent}>
        <div className={classes.logotipo}>
          <img src={Logotipo} />
        </div>
        <div>
          {" "}
          <div style={{ fontSize: "50px", fontWeight: "bold" }}>
            Ferrari California
          </div>
          <div style={{ fontSize: "40px", fontWeight: "lighter" }}>
            $725/day
          </div>
        </div>
      </div>
      <div className={classes.bodyContent}>
        <div className={classes.bodyContentLineOne}>
          <Button variant="outlined" className={classes.buttonCatolog}>
            Back to catolog
          </Button>
          <Card
            variant="outlined"
            className={classes.root}
            style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                title="Contemplative Reptile"
                className={classes.imagem}
                image={ImagemCar}
              />
            </CardActionArea>
          </Card>
          <div className={classes.avoid}>
            <span
              style={{ fontSize: "50px", fontWeight: "bold", width: "100%" }}
            >
              01
            </span>
            <span
              style={{ fontSize: "30px", fontWeight: "lighter", width: "100%" }}
            >
              Red
            </span>
          </div>
        </div>

        <div className={classes.bodyContentLineTwo}>
          <Button className={classes.buttonBookNow} variant="outlined">
            Book now
          </Button>
        </div>
      </div>
      <div className={classes.controlsContent}></div>
    </div>
  );
};

export default CarCarousel;
