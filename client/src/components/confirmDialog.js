import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@material-ui/core";
import { Fragment } from "react";
import { useState } from "react";

const ConfirmDialog = ({ btnText, btnHeader, btnBody, deleteIt }) => {
  const [show, setShow] = useState(false);

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => setShow(true)}
      >
        {btnText}
      </button>
      <Dialog open={show} maxWidth="sm" fullWidth>
        <DialogTitle>{btnHeader}</DialogTitle>
        <DialogContent>
          <Typography>{btnBody}</Typography>
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            variant="contained"
            onClick={() => setShow(false)}
          >
            Cancel
          </Button>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => deleteIt()}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default ConfirmDialog;
