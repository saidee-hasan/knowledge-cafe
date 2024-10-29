import { useState } from "react"
import Blog from "./components/Blog/Blog"
import BookMarks from "./components/BookMarks/BookMarks"
import Header from "./components/Header/Header"

function App() {
 const [bookMarks,setBookMarks]=useState([]);
 const handleBookMark = (blogs)=>{
  console.log(blogs)
 }
  return (
    <div className="">
     <Header/>
     <div className=" md:flex   md:w-11/12 mx-auto">
     <Blog handleBookMark={handleBookMark}  />
     <BookMarks/>
     </div>
     <footer className="mt-8 p-4 bg-gray-200 text-center">

        <p className="text-gray-600">&copy; {new Date().getFullYear()} Your Blog Name. All rights reserved.</p>

      </footer>
    </div>
  )
}

export default App
