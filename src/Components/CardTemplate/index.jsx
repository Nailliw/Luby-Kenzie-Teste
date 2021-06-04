import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardHeader,
  IconButton,
  Typography,
} from "@material-ui/core";
import React from "react";

import imagecar from "../../assets/images/carimage.png";
import { MoreVert as MoreVertIcon } from "@material-ui/icons";

import { useStyles } from "./style";
import "./styles.css";
import { Link } from "react-router-dom";

const CarCard = ({ name, marca, img, price }) => {
  const classes = useStyles();
  return (
    <Link to="/car/1">
      <Card variant="outlined" className={classes.root}>
        <CardHeader
          action={
            <IconButton aria-label="">
              <MoreVertIcon />
            </IconButton>
          }
          title={name}
          subheader={marca}
        />
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            image={imagecar}
            title="Contemplative Reptile"
            className={classes.imagem}
          />
          <CardContent>
            <Typography className={classes.price} component="div">
              <div className={classes.priceFirst}>$</div>
              <div className={classes.priceMiddle}>{price}</div>
              <div className={classes.priceLast}>/day</div>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default CarCard;
