import { useEffect } from "react";
import { useState } from "react"


function Blog() {

    const [blog,setBlog]=useState([]);
    useEffect(()=>{
        fetch("./blogs.json")
        .then(res => res.json())
        .then(data => setBlog(data))
    },[])

    console.log(blog)
  return (

    <div>
      


    </div>
  )
}

export default Blog
