import { Dialog, DialogContent } from "@material-ui/core";
import { Fragment } from "react";
import { useState } from "react";
// import Create from "./create";
import CreateMaterial from "./createMaterial";

const CreateDialog = ({ listUpdate }) => {
  const [show, setShow] = useState(false);

  const closeModalAndUpdateList = () => {
    setShow(false);
    listUpdate(true);
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setShow(true)}
      >
        Add Record
      </button>
      <Dialog open={show} maxWidth="sm" fullWidth>
        <DialogContent>
          {/* <Create handleClose={() => closeModalAndUpdateList()} /> */}
          <CreateMaterial handleClose={() => closeModalAndUpdateList()} />
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default CreateDialog;
