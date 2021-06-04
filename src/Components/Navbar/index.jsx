import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { useStyles } from "./style";
import { Link } from "react-router-dom";
import { TextField } from "@material-ui/core";

import RoomSharpIcon from "@material-ui/icons/RoomSharp";
import SearchIcon from "@material-ui/icons/Search";

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

          <div style={{ display: "flex" }}>
            <TextField
              className={classes.middleToolbar}
              type="text"
              InputProps={{
                startAdornment: <RoomSharpIcon />,
              }}
            />

            <form className={classes.middleToolbar} noValidate>
              <TextField id="date" type="date" defaultValue="2021-05-24" />
            </form>
            <form className={classes.middleToolbar} noValidate>
              <TextField id="date" type="date" defaultValue="2021-05-24" />
            </form>
            <form className={classes.middleToolbar} noValidate>
              <SearchIcon />
            </form>
          </div>
          <div>
            <Button className={classes.upButton} size="small">
              Sign up
            </Button>
            <Button className={classes.inButton} variant="outlined">
              Sign In
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
