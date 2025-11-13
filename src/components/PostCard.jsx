import React from 'react'
import { Link } from 'react-router-dom'
import appwriteService from '../appwrite/DBConfig'

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div>
                <div>
                    <img
                        src={appwriteService.getFilePreview(featuredImage)}
                        alt={title} 
                        className='rounded-xl w-32'
                    />
                </div>
                <h2 className='text-xl font-bold' > {title}</h2>
            </div>
        </Link>
    )
}

export default PostCard
