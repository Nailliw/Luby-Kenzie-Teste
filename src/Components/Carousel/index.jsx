import { Button } from "@material-ui/core";
import Slider from "react-slick";
import "antd/dist/antd.css";
import "./style.css";
import {Link} from 'react-router-dom'
import ArrowForwardSharpIcon from "@material-ui/icons/ArrowForwardSharp";
import ArrowBackSharpIcon from "@material-ui/icons/ArrowBackSharp";

import ImagemCar from "../../assets/images/Mask Group 13.png";
import Example from "../../assets/images/Group 67.png";
import Logotipo from "../../assets/images/logotipo.png";
import { useStyles } from "./style";

const CarCarousel = () => {
  const classes = useStyles();

  const settings = {
    customPaging: function (i) {
      return (
        <div style={{ border: "1 px solid black" }}>
          <a className={classes.customPaging}>{i + 1}</a>
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
  };
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
          <Button
            startIcon={<ArrowBackSharpIcon />}
            size="xl"
            variant="outlined"
            disableRipple
            className={classes.buttonCatolog}
          >
            <Link to='/'>
                        Back to catalog
            </Link>

          </Button>
          <div className={classes.root}>
            <Slider className={classes.carousel} {...settings}>
              <div>
                <img src={ImagemCar} />
              </div>
              <div>
                <img src={Example} />
              </div>
              <div>
                <img src={ImagemCar} />
              </div>
            </Slider>
          </div>

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
          <Button
            size="large"
            disableRipple
            endIcon={<ArrowForwardSharpIcon />}
            className={classes.buttonBookNow}
            variant="outlined"
          >
            Book now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarCarousel;
