import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 10px 30px #0000001A",
    opacity: "1",
    color: "black",
    paddingLeft: "120px",
    paddingRight: "100px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    display: "flex",
    height: "100%",
    alignItems: "baseline",
    color: "#000",
  },
  upButton: {
    textTransform: "none",
    color: "#7B89F4",
  },
  inButton: {
    textTransform: "none",
    color: "#7B89F4",
    border: "2px solid #7B89F4",
    borderRadius: "13px",
    width: "84px",
    height: "36px",
    marginLeft: "28px",
  },
  middleToolbar: {
    paddingRight: "10px",
    fontSize: "10px",
    fontWeight: "lighter",
    color: "#656469",
  },
}));
