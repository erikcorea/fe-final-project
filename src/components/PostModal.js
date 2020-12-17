import React, { useState } from 'react';
import axios from 'axios';
import { apiUrl } from '../config';

const PostModal = ({show, handleClose, setRefresh, token}) => {
    const [newPost, setNewPost] = useState({
        title: "",
        description: ""
    });

    function handleChange(event) {
        event.preventDefault();
        setNewPost({...newPost, [event.target.id]: event.target.value});
    }
    
    function createPost(event) {
        event.preventDefault();
        axios({
		    method: "POST",
            url: `${apiUrl}/posts/`,
            data: newPost,
		    headers: {
			    "Authorization" : `Token ${token}`
		    }
        })
        .then(() => {
            handleClose();
            setRefresh(true);
        })
        .catch(console.error);
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
					<form id='create' onSubmit={createPost}>
						<div className='modal-body'>
							<h4>Title</h4>
							<input
								type='text'
								id='title'
								name='title'
								value={newPost.title}
								onChange={handleChange}
							/>
							<textarea
								id='description'
								form='create'
								row='100'
								value={newPost.description}
								onChange={handleChange}
								name='description'
								placeholder='Enter Text Here...'></textarea>
						</div>
						<div className='modal-footer'>
							<button>Create Post</button>
						</div>
					</form>
				</div>
			</div>
		);
};

export default PostModal;