import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  useEffect(() => {
    axios.get('/api/reviews')
      .then((response) => {
        setReviews(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/reviews', {
        rating,
        review,
      });
      setReviews([...reviews, response.data]);
      setRating(0);
      setReview('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Reviews</h1>
      <ul>
        {reviews.map((review) => (
          <li key={review._id}>
            <p>Rating: {review.rating}</p>
            <p>Review: {review.review}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          Rating:
          <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} />
        </label>
        <label>
          Review:
          <textarea value={review} onChange={(e) => setReview(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Reviews;