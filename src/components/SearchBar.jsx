import React, { Component } from 'react'
import styles from './SearchBar.module.css'

class SearchBar extends Component {

    state = {
        query: '',
    }

    onSearch = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.query)
    }
    onFilterChange = (e) => {
        const { value } = e.currentTarget;
        this.setState({query: value})
    }
    render() {
        const {query} = this.state
        return (
        <header className={styles.searchBar}>
            <form className="SearchForm">
                <input
                   className={styles.searchInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={query}     
                    onChange={this.onFilterChange}   
                    />
                    <button
                        disabled={query.length ? false : true}
                        onClick={this.onSearch}
                        type="submit"
                        className={styles.searchButton}>
                            Search
                        </button>   
            </form>
        </header>
    )
    }
}

export default SearchBar;