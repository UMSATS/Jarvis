import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

// The cookie expires in 5 seconds - useful for testing, but should be
// set to a longer period in the future.
const COOKIE_EXPIRY = 5 / (60 * 60 * 24); // in days

export default function GreetingDialog() {
    const [open, setOpen] = React.useState(false);

    const setShowGreetingDialog = (show) => {
        if (Cookies.get('showGreetingDialog') !== 'false') {
            Cookies.set('showGreetingDialog', show, { expires: COOKIE_EXPIRY });
            setOpen(Cookies.get('showGreetingDialog') === 'true');
        }
    }

    useEffect(() => {
        setShowGreetingDialog('true')
    }, [])

    const handleClick = () => {
        setShowGreetingDialog('false')
    }
    
    return (
        <Dialog open={open}>
            <DialogTitle>
                Welcome to JARVIS!
            </DialogTitle>
            <DialogActions>
                <Button onClick={handleClick}>
                    CLOSE
                </Button>
            </DialogActions>
        </Dialog>
    )
}