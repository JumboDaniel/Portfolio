import React, { useState, useEffect } from 'react'

const Blog= ()=> {
const [posts, setPosts] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null)

const API_URL = 'https://dev.to/api/articles?username=jumbo02'
let  apiPost=''
useEffect(()=>{
    fetch(API_URL)
    .then(response => response.json())
    .then((response)=>{
        if(response.ok){
            apiPost =response.json()
            return apiPost
        }
        setPosts(apiPost)
      
    })
    .catch((error)=>{
        console.error("Error fetching data: ", error);
        setError(error);
    })
    .finally(() => {
        setLoading(false);
        });

}, [])
    if (loading) return "Loading...";
    if (error) return "Error!";
    return(
        <>
        <div>
            My blogs
        </div>
        </>

    )
}

export default Blog
