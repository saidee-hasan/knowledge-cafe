import Blog from "./components/Blog/Blog"
import BookMarks from "./components/BookMarks/BookMarks"
import Header from "./components/Header/Header"

function App() {
 

  return (
    <>
     <Header/>
     <div className="md:flex">
     <Blog/>
     <BookMarks/>
     </div>
    </>
  )
}

export default App
