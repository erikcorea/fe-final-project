import React, { useState } from 'react';
import axios from 'axios';
import { apiUrl } from '../config';

const EditModal = ({show, handleClose, postId, title, description, setRefresh, token, skill}) => {
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
			data: editPost,
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
					<p>CODE CONNECTIONS</p>
					<span className='close-modal-btn' onClick={handleClose}>
						X
					</span>
				</div>
				<div className='modal-content'>
					<form id='edit'>
						<textarea form='edit' id='title' onChange={handleChange}>
							{title}
						</textarea>
						<textarea id='description' form='edit'  onChange={handleChange}>
							{description}
						</textarea>
						<textarea form='edit'  id='needed_skills' onChange={handleChange}>
							{skill}
						</textarea>
						<button onClick={editYourPost} className="modal-content-btn" type='submit'>
							Submit
						</button>
					</form>
				</div>
			</div>
		);
};

export default EditModal;