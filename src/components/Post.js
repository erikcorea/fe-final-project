import React, { useState } from 'react';
import axios from 'axios';
import { apiUrl } from '../config';
import EditModal from './EditModal';

const Post = ({title, description, setRefresh, author, postId, token}) => {
    const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    function editFunc() {
        handleShow();
    }

    function deleteFunc() {
        axios({
            method: 'DELETE',
            url: `${apiUrl}/posts/${postId}`,
            headers: {
                "Authorization" : `Token ${token}`
		    }
        })
        .then(() => setRefresh(true));
    }

    return (
        <div className="main-post-wrapper">
           <div className="post-boarder">
               <div className="post-author">
                   <h3>{author}</h3>
               </div>
               <div className="post-body">
                   <h2>{title}</h2>
                   <p>{description}</p>
               </div>
               <div className="post-footer">
                   {token ? (
                       <div>
                           <button className="post-dlt-btn post-crud-btn" onClick={editFunc}>
                               Edit
                           </button>
                           <button className="post-edt-btn post-crud-btn" onClick={deleteFunc}>
                               Delete
                           </button>
                       </div>
                   ) : (
                   <p></p>
                   )}
               </div>
           </div>
           <EditModal 
                show={show}
                handleClose={handleClose}
                postId={postId}
                title={title}
                description={description}
                setRefresh={setRefresh}
                token={token}
            />
        </div>
    );
};

export default Post;