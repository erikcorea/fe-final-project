import React, { useState, useEffect } from 'react';
import Post from './Post';
import axios from 'axios';
import { apiUrl } from '../config';


const Home = ({ refresh, setRefresh, token }) => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        if(refresh) {
            axios({
                method: 'GET',
                url: `${apiUrl}/posts/`,
            })
            .then((res) => {
                setPost(res.data.reverse())
                console.log(post);
            })
            .then(() => setRefresh(false));
        }
    }, [refresh]);
    return (
        <div>
            {post.map((post) => {
                return (
                    <Post 
                        key={post.id}
                        postId={post.id}
                        title={post.title}
                        description={post.description}
                        author={post.author}
                        setRefresh={setRefresh}
                        token={token}
                    />
                );
            })}
        </div>
    );
};

export default Home;