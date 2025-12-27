import React from 'react'
import { Link } from 'react-router-dom'
import appwriteService from '../appwrite/DBConfig'

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className="bg-slate-900 rounded-xl p-4 hover:shadow-xl
      hover:shadow-indigo-500/10 transition">
                <img
                    src={appwriteService.getFilePreview(featuredImage)}
                    alt={title}
                    className="rounded-lg mb-3 h-40 w-full object-cover"
                />
                <h2 className="text-lg font-semibold text-slate-100">
                    {title}
                </h2>
            </div>
        </Link>
    )
}

export default PostCard
