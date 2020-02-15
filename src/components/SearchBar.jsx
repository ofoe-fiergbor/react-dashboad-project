import React, { Component } from 'react'

export class SearchBar extends Component {
    render() {
        return (
            <div className='searchBar'>
                <input type="search" class="form-control" placeholder="Search Startup"></input>
            </div>
        )
    }
}

export default SearchBar
