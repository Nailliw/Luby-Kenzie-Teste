import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    paddingLeft: "90px",
    paddingRight: "90px",
    paddingTop: "53px",
  },
  headerContent: {
    height: "123px",
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
  },
  logotipo: {
    width: "91px",
    height: "123px",
    marginRight: "29px",
  },
  bodyContent: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  bodyContentLineOne: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  buttonCatolog: {
    marginRight: "77px",
    fontSize: "16px",
    fontWeight: "lighter",
    width: "200px",
    height: "50px",
    textAlign: "left",
    letterSpacing: "0px",
    borderRadius: "50px",
    textTransform: "none",
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },
  imagem: {
    width: "783px",
    height: "408px",
    backgroundColor: "rgba(255,255,255, 0.1)",
  },
  avoid: {
    marginLeft: "91px",
    marginBottom: "326px",
    display: "flex",
    flexWrap: "wrap",
  },

  buttonBookNow: {
    color: "#fff",
    backgroundColor: "#313136",
    borderRadius: "50px",

    textTransform: "none",
    "&:hover": {
      backgroundColor: "#313136",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
    fontSize: "16px",
    fontWeight: "lighter",
  },

  carousel: {
    height: "408px",
    width: "783px",
    color: "#fff",
  },
  customPaging: {
    width: "100%",
    position: "absolute",
  },
  bodyContentLineTwo: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    marginTop: "60px",
    paddingBottom: "50px",
  },
}));
