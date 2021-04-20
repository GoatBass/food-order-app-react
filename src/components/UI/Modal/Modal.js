import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Backdrop from './Backdrop/Backdrop';
import ModalOverlay from './ModalOverlay/ModalOverlay';

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onHideCart} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    );
};

export default Modal;