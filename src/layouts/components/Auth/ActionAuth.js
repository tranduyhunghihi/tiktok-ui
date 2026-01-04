import { useState } from 'react';

import Auth from './Auth';
import Button from '~/components/Button';

function ActionAuth() {
    const [showAuth, setShowAuth] = useState(false);

    const handleShow = () => {
        setShowAuth(true);
    };
    const handleClose = () => {
        setShowAuth(false);
    };

    return (
        <>
            <Button primary onClick={handleShow}>
                Log in
            </Button>

            {showAuth && <Auth onBack={handleClose}/>}
        </>
    );
}

export default ActionAuth;
