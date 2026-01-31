import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
 
function HelpDialog({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Help</DialogTitle>
      <DialogContent>
        hello you have reached the help pop-up
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>CLOSE</Button>
      </DialogActions>
    </Dialog>
  );
}
 
export default HelpDialog;