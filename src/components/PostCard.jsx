import React from 'react'
import { Link } from 'react-router-dom'
import appwriteService from '../appwrite/DBConfig'

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className="bg-[#0b1220] rounded-xl overflow-hidden">

                {/* IMAGE CONTAINER */}
                <div className="w-full h-44">
                    <img
                        src={appwriteService.getFilePreview(featuredImage)}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* TITLE */}
                <h2 className="text-white text-lg font-semibold p-3">
                    {title}
                </h2>
            </div>
        </Link>
    )
}

export default PostCard
