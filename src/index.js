import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyAGjtQu3KOtP344QVK8JpIf6bcr3chXMXs';

import SearchBar from './components/search_bar';

const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));