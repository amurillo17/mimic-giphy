import { useState, useEffect } from 'react';

function SearchResults({searchText}: SearchResultsProps) {

    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const api_key = '5Muqe6HOngq40S9xI6ZQJ7jDfvZUoS5f';
        fetch(`http://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${searchText}`)
            .then(response => response.json())
            .then(data => setSearchResults(data.data))
            .catch(e => console.log(e));
    }, [searchText]);

    return (
        <ul className="gifList">
            {
                searchResults.map((result: any, index) => <li key={index}><img src={result.images.fixed_width.url}/></li>)
            }
        </ul>
    )
}

type SearchResultsProps = {
    searchText: string
}

export default SearchResults;
