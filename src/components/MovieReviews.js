// Code MovieReviews Here
import React from 'react';

const Review = ({display_title, summary_short}) => (
    <div className="review">
        <h3>{display_title}</h3>
        <p>{summary_short}</p>
    </div>
)

const MovieReviews = ({reviews}) => {
    return(
        <div className="review-list">
            {reviews.map(Review)}
        </div>
    )
}


export default MovieReviews
