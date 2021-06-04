import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { useStyles } from "./style";
import { Link } from "react-router-dom";

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <Link to="/">
            <div className={classes.logo}>
              <div style={{ fontSize: "24px", fontWeight: "bold" }}>EXOTIC</div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: "regular",
                  marginLeft: "5px",
                }}
              >
                CARS
              </div>
            </div>
          </Link>

          <div>datas</div>
          <div>
            <Button variant="text" color="default">
              Sign up
            </Button>
            <Button variant="outlined" color="default">
              Sign In
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
