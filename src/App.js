import React, { useEffect, useRef } from "react";
import { Grid } from "@material-ui/core";
import Details from "./components/Details/Details";
import useStyles from "./styles";
import Main from "./components/Main/Main";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
  ErrorPanel,
} from "@speechly/react-ui";
import { SpeechState, useSpeechContext } from "@speechly/react-client";
import Navbar from "./components/Navbar";
import Fade from "react-reveal/Fade";

function App() {
  const classes = useStyles();
  const { speechState } = useSpeechContext();
  const main = useRef(null);

  const executeScroll = () => main.current.scrollIntoView();

  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, [speechState]);

  return (
    <div>
      <Navbar style={{ boxShadow: "0 30px 40px rgba(63, 81, 181, 0.1)" }} />
      <Fade top>
        <Grid
          className={classes.grid}
          container
          spacing={0}
          alignItems="center"
          justify="center"
          style={{ height: "100vh" }}
        >
          <Grid item xs={12} sm={4} className={classes.mobile}>
            <Details title="Income" />
          </Grid>
          <Grid ref={main} item xs={12} sm={3} className={classes.main}>
            <Main />
          </Grid>
          <Grid item xs={12} sm={4} className={classes.desktop}>
            <Details title="Income" />
          </Grid>
          <Grid item xs={12} sm={4} className={classes.last}>
            <Details title="Expense" />
          </Grid>
        </Grid>
      </Fade>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
        <ErrorPanel />
      </PushToTalkButtonContainer>
    </div>
  );
}

export default App;
