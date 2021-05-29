import React from "react";
import { Dialog as DialogMUI } from "@material-ui/core";
import ReactPlayer from "react-player";
const Dialog = ({ open, setOpen }) => {
  return (
    <>
      <DialogMUI
        open={open}
        onClose={() => setOpen(false)}
        fullWidth={true}
        maxWidth="md"
      >
        <ReactPlayer
          width="100%"
          height="450px"
          controls={true}
          url="https://youtu.be/4DCTTrGjGU4"
        />
      </DialogMUI>
    </>
  );
};

export default Dialog;
