import React from "react";
import "./MovieApp.css";

function MovieModal({ movie, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={e => e.stopPropagation()} // prevent closing when clicking inside
      >
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
        <h2>{movie.title}</h2>
        <p><strong>Release Date:</strong> {movie.release_date}</p>
        <p><strong>Rating:</strong> {movie.vote_average}</p>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieModal;