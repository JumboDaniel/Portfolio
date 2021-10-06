import React, { useState, useEffect} from 'react'
import Posts from './post'
const Blog= ()=> {
const [posts, setPosts] = useState('')
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null)

const API_URL = 'https://dev.to/api/articles?username=jumbo02'
// let  apiPost=''
useEffect(()=>{
    fetch(API_URL)
    .then((response) => {
        return response.json()
      })
      .then((data)=>{
        setPosts(data)
        setLoading(false)
      })
    .catch((error)=>{
        console.error("Error fetching data: ", error);
        setError(error);
    })

}, [])
    if (loading) return "Loading...";
    if (error) return "Error!";
    return(
        <div>
        {posts.map((post, index) => (
                <Posts key={`${post.id}-${index}`} post={post}/>
             ))
            }
        </div>

    )
}

export default Blog
