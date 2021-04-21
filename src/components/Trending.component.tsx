import { useEffect, useState } from 'react';

function Trending() {

    const [trendingResults, setTrendingResults] = useState([]);
    useEffect(() => {
        const api_key = '5Muqe6HOngq40S9xI6ZQJ7jDfvZUoS5f';
        fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${api_key}`)
            .then(response => response.json())
            .then(data => setTrendingResults(data.data))
            .catch(e => console.log(e));
    }, []);

    return (
        <ul className="gifList">
            {
                trendingResults.map((result: any, index) => <li key={index}><img src={result.images.fixed_width.url}/></li>)
            }
        </ul>
    );
}

export default Trending;
