import React from 'react'

const Posts = ({ post }) => {
    return (
        <div className="mt-6">
        <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between"><span className="font-light text-gray-600">{post.readable_publish_date}</span>
            <span className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">{post.tags}</span>
            </div>
            <div className="mt-2"><p class="text-2xl font-bold text-gray-700 hover:underline">{post.title}</p>
                <p className="mt-2 text-gray-600">{post.description}</p>
            </div>
            <div className="flex items-center justify-between mt-4">
                <a href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline">Read more</a>
                <div><a href="https://dev.to/jumbo02" target="_blank" rel="noopener noreferrer" class="flex items-center">
                    <img
                            src={post.user.profile_image}
                            alt="avatar" className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"/>
                        <h1 className="font-bold text-gray-700 hover:underline">{post.user.name}</h1>
                    </a></div>
            </div>
        </div>
    </div>
    );
  };

  export default Posts;