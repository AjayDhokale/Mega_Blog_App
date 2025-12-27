import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import appwriteService from '../appwrite/DBConfig'
import { PostCard, Container } from '../components/index'

function AllPosts() {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		appwriteService.listPost([]).then((posts) => {
			if (posts) {
				setPosts(posts.documents)
			}
		})
	}, []);
	return (
		<div className='w-full py-8'>
			<Container>
				<div className='flex flex-wrap'>
					{
						posts.map((post) => (
							<div className='p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4' key={post.$id}>
								<PostCard {...post} />
							</div>
						))
					}
				</div>
			</Container>
		</div>
	)
}

export default AllPosts
