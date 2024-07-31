import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const Modal = ({ open, handleOpen, handleDeleteConfirm }) => {
  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        className="fixed inset-1 flex items-center justify-center bg-black bg-opacity-0"
      >
        <div className="bg-white p-4 rounded-lg border border-black-400">
        <DialogBody>
          Are you sure you want to delete this job listing?
        </DialogBody>
        <DialogFooter>
          <Button
            color="red"
            onClick={handleOpen}
            className="mr-1 bg-red-500 text-white py-2 px-4 "
          >
            Cancel
          </Button>
          <Button
            onClick={handleDeleteConfirm}
            className="bg-indigo-500 py-2 px-4 "
          >
            Confirm
          </Button>
        </DialogFooter>
        </div>
      </Dialog>
    </>
  );
};

export default Modal;
