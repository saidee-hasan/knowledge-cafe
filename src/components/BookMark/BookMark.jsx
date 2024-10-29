import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Importing icons for edit and delete

function BookMark({ bookMark, onEdit, onDelete }) {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this bookmark?")) {
      onDelete(bookMark.id); // Assuming bookMark has an 'id' property
    }
  };

  return (
    <div className='bg-slate-100 mt-2 p-4 m-4 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105'>
      <h3 className='text-xl font-semibold'>{bookMark.title}</h3>
      {bookMark.description && <p className='mt-2 text-gray-700'>{bookMark.description}</p>}
      {bookMark.dateAdded && <p className='mt-1 text-sm text-gray-500'>Added on: {new Date(bookMark.dateAdded).toLocaleDateString()}</p>}
      
      {/* Optional: Display tags or categories */}
      {bookMark.tags && bookMark.tags.length > 0 && (
        <div className='mt-2'>
          {bookMark.tags.map((tag, index) => (
            <span key={index} className='inline-block bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded'>
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className='mt-4 flex justify-end'>
        <button 
          className='bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition duration-300 mr-2 flex items-center'
          onClick={() => onEdit(bookMark.id)} // Assuming bookMark has an 'id' property
        >
          <FaEdit className='mr-1' /> Edit
        </button>
        <button 
          className='bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300 flex items-center'
          onClick={handleDelete}
        >
          <FaTrash className='mr-1' /> Delete
        </button>
      </div>
    </div>
  );
}

BookMark.propTypes = {
  bookMark: PropTypes.shape({
    id: PropTypes.string.isRequired, // Assuming each bookmark has a unique ID
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    dateAdded: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string), // Optional tags array
  }).isRequired,
  onEdit: PropTypes.func.isRequired, // Function to handle edit action
  onDelete: PropTypes.func.isRequired, // Function to handle delete action
};

export default BookMark;