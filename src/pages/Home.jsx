import React from 'react'
import appwriteService from '../appwrite/DBConfig'
import { useState } from 'react'
import { useEffect } from 'react';
import { Container, PostCard } from '../components';
import { useSelector } from 'react-redux';

function Home() {
    const [posts, setPosts] = useState([]);
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        // Fixes
        if (!authStatus) {
            setPosts([]);
            return;
        }

        appwriteService.listPost().then((post) => {
            if (post) {
                setPosts(post.documents)
            }
        })
    }, [authStatus]);

    if (!authStatus) {
        return (
            <div className='w-full py-8 mt-4 text-center'>
                <Container >
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-full'>
                            <h1 className='text-2xl font-bold hover:text-gray-500'>
                                Login to read Posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    if (posts.length === 0) {
        return (
            <div className='w-full py-8 mt-4 text-center'>
                <Container >
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-full'>
                            <h1 className='text-2xl font-bold hover:text-gray-500'>
                                No Posts Available
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className='w-full py-8'>
            <Container >
                <div className='flex flex-wrap'>
                    {
                        posts.map((post) => (
                            <div className='bg-white m-10 flex justify-center items-center '>
                                <PostCard {...post} />
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default Home
