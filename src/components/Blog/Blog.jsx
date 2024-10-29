import { useEffect } from "react";
import { useState } from "react"
import Blogs from "../Blogs/Blogs";


function Blog() {

    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        fetch("./blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data.blogPosts))
    },[])

    console.log(blogs)
  return (

    <div className="w-2/3">
      <h1>{blogs.length}</h1>
   {
    blogs.map((blogs,index) => (<Blogs blogs={blogs} key={index} />))
   }

    </div>
  )
}

export default Blog
