import ReactDOM from 'react-dom';
import React from 'react';
import '../css/Modal.css';

function Modal({ children }) {
    return (
        ReactDOM.createPortal(
            <div className="modalBackground">
                {children}
            </div>,
            document.getElementById('modal')
        )
    );
}

export { Modal };