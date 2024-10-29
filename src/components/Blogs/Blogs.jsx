import PropTypes from "prop-types";
import React, { useState } from "react";
import Boy from "../../assets/boy2.png";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

function Blogs({ blogs , handleBookMark}) {
  const { title, coverImage, author, postedDate, readingTime } = blogs;

  // State to manage if the blog is bookmarked
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Toggle bookmark state
  const handleBookmarkToggle = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="border border-gray-300 p-4 rounded-md shadow-lg ">
      <img className="w-full h-64 object-cover rounded-md" src={coverImage} alt={title} />
      <div className="flex justify-between mt-2">
        <div className="flex items-center">
          <img className="w-12 h-12 rounded-full" src={Boy} alt={author.name} />
          <div className="ml-3">
            <h3 className="text-lg font-semibold">{author.name}</h3>
            <p className="text-gray-500 text-sm">{postedDate}</p>
          </div>
        </div>
        <div className="flex items-center">
          <p className="text-gray-600 text-sm">{readingTime} min read</p>
          <button
         
            className={`ml-2 p-1 rounded-full transition-colors duration-300 ${
              isBookmarked ? "text-blue-500" : "text-gray-500"
            }`}
            onClick={handleBookmarkToggle ,  ()=>handleBookMark(blogs)}
            aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
          >
            {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
          </button>
        </div>
      </div>

      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <p className="text-gray-700 mt-2">{title}</p>
    </div>
  );
}

Blogs.propTypes = {
  blogs: PropTypes.object.isRequired,
};

export default Blogs;