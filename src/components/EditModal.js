import React, { useState } from 'react';
import axios from 'axios';
import { apiUrl } from '../config';

const EditModal = ({show, handleClose, postId, title, description, setRefresh, token}) => {
    const [editPost, setEditPost] = useState({});

    function handleChange(event) {
        event.preventDefault();
        setEditPost({...editPost, [event.target.id]: event.target.value});
    }

    function editYourPost(event){
        event.preventDefault();
        axios({
            method: 'PATCH',
            url: `${apiUrl}/posts/${postId}/`,
            headers: {
                "Authorization" : `Token ${token}`
		    }
        })
        .then(() => {
            handleClose();
            setRefresh(true);
        });
    }
    return (
			<div
				className='modal-wrapper'
				style={{
					transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
					opacity: show ? '1' : '0',
				}}>
				<div className='modal-header'>
					<p>welcome</p>
					<span className='close-modal-btn' onClick={handleClose}>
						X
					</span>
				</div>
				<div className='modal-content'>
					<form id='edit'>
						Title:{' '}
						<textarea form='edit' rows='1' id='title' onChange={handleChange}>
							{title}
						</textarea>
						<textarea id='body' form='edit' cols='50' onChange={handleChange}>
							{description}
						</textarea>
						<button onClick={editYourPost} type='submit'>
							Submit
						</button>
					</form>
				</div>
			</div>
		);
};

export default EditModal;