import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'cdqVLSrqGAfeWBNHB5MwKGpsFtMal43L';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here



class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()

        this.state= {
            reviews: [],
            searchTerm: ""
        }
    }

    handleChange = (e) => {
        this.setState({ searchTerm: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(URL.concat(this.state.searchTerm))
        .then(response => response.json())
        .then(reviewData => this.setState({ reviews: reviewData.results }))
    }

    render(){
        return(

            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Look up review:</label>
                    <input id="search-input" type="text" onChange={this.handleChange}></input>
                    <button type="submit">Submit</button>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer