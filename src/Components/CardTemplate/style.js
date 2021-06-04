import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    width: "287px",
    height: "223px",
    marginBottom: "32px",
    border: "none",
  },
  price: {
    display: "flex",
    justifyContent: "flex-end",
  },
  priceFirst: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  priceMiddle: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  priceLast: {
    fontSize: "14px",
    alignItems: "flex-end",
    display: "flex",
  },
});
