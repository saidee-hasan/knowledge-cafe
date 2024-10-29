import PropTypes from "prop-types";
import BookMark from "../BookMark/BookMark";

function BookMarks({ bookMarks, readingTime }) {
  console.log(bookMarks);

  return (
    <div className="md:w-1/3 border-l-2 md:mt-20 border-gray-300 p-4">
      <div className="mb-4">
        <h1 className="text-3xl font-bold bg-slate-400 py-5 rounded-xl p-4 ">Reading Time {readingTime} minutes</h1>
      
      </div>
      {bookMarks.length === 0 ? (
        <p className="text-gray-500">No bookmarks available.</p>
      ) : (
        bookMarks.map((bookMark, index) => (
          <BookMark key={index} bookMark={bookMark} />
        ))
      )}
    </div>
  );
}

BookMarks.propTypes = {
  bookMarks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    dateAdded: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
};

export default BookMarks;