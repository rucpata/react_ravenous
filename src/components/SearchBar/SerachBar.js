import React from 'react';
import './SearchBar.css';



class SearchBar extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match',
        }

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handLocationChange = this.handLocationChange.bind(this);

        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        };
    }

    getSortByClass(sortByOption){
        if(this.state.sortBy === sortByOption){
            return 'active';
        }
        return '';
    }

    handleSortByChange(sortByOption) {
        this.setState({sortBy: sortByOption});
    }

    handleTermChange(event){
        this.setState({term: event.target.value});
    }

    handLocationChange(event){
        this.setState({location: event.target.value})
    }

    renderSortByOptions(){
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return (<li className={this.getSortByClass(sortByOptionValue)}
                            key={sortByOptionValue}
                            onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
                        {sortByOption}
                    </li>);
        });
    }

    render(){
        return(
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                    {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input onChange={this.handleTermChange} placeholder="Search Businesses" />
                    <input onChange={this.handLocationChange} placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a href='www.#.com'>Let's Go</a>
                </div>
            </div>
        );
    };
}

export default SearchBar;
