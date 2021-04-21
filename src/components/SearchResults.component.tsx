import { useState, useEffect } from 'react';

function SearchResults({ searchText }: SearchResultsProps) {

    const [searchResults, setSearchResults] = useState([]);
    const [showingInfo, setShowingInfo] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);

    useEffect(() => {
        const api_key = '5Muqe6HOngq40S9xI6ZQJ7jDfvZUoS5f';
        fetch(`http://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${searchText}`)
            .then(response => response.json())
            .then(data => setSearchResults(data.data))
            .catch(e => console.log(e));
    }, [searchText]);

    function showInfo(item: any): void {
        console.group(item);
        setCurrentItem(item);
        setShowingInfo(true);
    }

    const show = showingInfo ?
        <div>
            <button onClick={() => setShowingInfo(false)}>Back</button>
            <p>Rating: {(currentItem as any)?.rating}</p>
            <p>Username: {(currentItem as any)?.username}</p>
            <img src={(currentItem as any)?.images['480w_still'].url}/>
        </div>
        :
        <ul className="gifList">
            {
                searchResults.map((result: any, index) => <li key={index} onClick={() => showInfo(result)}><img src={result.images.fixed_width.url} /></li>)
            }
        </ul>;

    return (
        <div>
            {show}
        </div>
    )
}

type SearchResultsProps = {
    searchText: string
}

export default SearchResults;
