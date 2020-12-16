import React from 'react';
import axios from 'axios';
import '../App.css';

const PostModal = ({show, handleClose, setRefresh}) => {
    return (
            <div className="modal-wrapper" style={{
                transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
                opacity: show ? '1' : '0'
            }}>
                <div className="modal-header">
                    <p>welcome</p>
                    <span className="close-modal-btn" onClick={handleClose}>X</span>
                </div>
                <div className="modal-content">
                    <div className="modal-body">
                        <h4>Modal</h4>
                        <p>erik sebas salvador benita magarita sandy armany esmeralda alondra yadida yosimar thomas alexis lil-sal pills water bottle bowl computer computer mug pants paper tags</p>
                    </div>
                    <div className="modal-footer">
                        <button onClick={handleClose}>Create Post</button>
                    </div>
                </div>
            </div>
    );
};

export default PostModal;