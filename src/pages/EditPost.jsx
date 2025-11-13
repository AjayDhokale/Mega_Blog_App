import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import appwriteService from '../appwrite/DBConfig'
import { Container, PostForm } from '../components';

function EditPost() {
    const [posts, setPosts] = useState(null);
    const { slug } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                    console.log(post);
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate]);
    console.log(posts);
    

    return posts ? (
        <div>
            <Container>
                <PostForm post={posts} />
            </Container>
        </div>
    )  : null
}

export default EditPost
