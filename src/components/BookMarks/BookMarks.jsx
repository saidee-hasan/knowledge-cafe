import PropTypes from "prop-types";
import BookMark from "../BookMark/BookMark";

function BookMarks({bookMarks}) {

console.log(bookMarks)
  return (
    <div className="md:w-1/3 border-s-2">
      <h1 className="text-3xl">   BookMarks{bookMarks.length}</h1>
      {
        bookMarks.map((bookMark,index)=>(<BookMark  key={index}  bookMark={bookMark}/>))
      }


   
    </div>
  )
}

BookMarks.prototype={
  bookMarks : PropTypes.object.isRequired
}

export default BookMarks;
