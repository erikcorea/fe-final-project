import React, { useState } from 'react';
import axios from 'axios';
import { apiUrl } from '../config';

const PostModal = ({show, handleClose, setRefresh, token}) => {
    const [newPost, setNewPost] = useState({
        title: "",
		description: "",
		needed_skills: "",
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
					display: show ? 'block' : 'none',
					// opacity: show ? '1' : '0',
				}}>
				<div className='modal-header'>
					<p>CODE CONNECTIONS</p>
					<span className='close-modal-btn' onClick={handleClose}>
						X
					</span>
				</div>
				<div className='modal-content'>
					<form id='create' onSubmit={createPost}>
						<div>
							<input
								type='text'
								id='title'
								name='title'
								value={newPost.title}
								onChange={handleChange}
								placeholder="Title"
							/>
						</div>
						<div>
							<textarea
								className="modal-textarea"
								id='description'
								form='create'
								onChange={handleChange}
								value={newPost.description}
								name='description'
								placeholder='Enter Text Here...'>
							</textarea>
						</div>
						<div>
							<input
								type='text'
								id='needed_skills'
								name='needed_skills'
								value={newPost.needed_skills}
								onChange={handleChange}
								placeholder="Needed Skills"
							/>
						</div>
							<button className="modal-content-btn">Create Post</button>
					</form>
				</div>
			</div>
		);
};

export default PostModal;