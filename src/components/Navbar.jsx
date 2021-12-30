import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = {
  root: {
    flexGrow: 1,
  },
};

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div
      className={classes.root}
      style={{ boxShadow: "0 30px 40px rgba(63, 81, 181, 0.1)" }}
    >
      <AppBar position="static" style={{ alignItems: "center" }}>
        <Toolbar>
          <Typography variant="h5" color="inherit">
            EXPENSE TRACKER
          </Typography>
        </Toolbar>
        <i style={{ marginBottom: "5px", marginTop: "-15px" }}>
          ( Powered by voice assistant )
        </i>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
