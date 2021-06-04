import { Container, CssBaseline } from "@material-ui/core";

import Routes from "./Routes";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container disableGutters="true" maxWidth="xl">
        <Navbar />
        <Routes />
      </Container>
    </>
  );
};

export default App;
