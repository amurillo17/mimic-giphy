import { useState } from 'react';
import Header from './Header.component';
import Trending from './Trending.component';
import SearchResults from './SearchResults.component';

function Giphy() {

    const [searchText, setSearchText] = useState('');
    const show = searchText ? <SearchResults searchText={searchText}></SearchResults> : <Trending></Trending>;

    return (
        <div>
            <Header setSearchText={setSearchText}></Header>
            {show}
        </div>
    );
}

export default Giphy;
