import Blog from "./components/Blog/Blog"
import BookMarks from "./components/BookMarks/BookMarks"
import Header from "./components/Header/Header"

function App() {
 

  return (
    <div className="">
     <Header/>
     <div className="md:flex  w-11/12 mx-auto">
     <Blog/>
     <BookMarks/>
     </div>
    </div>
  )
}

export default App
