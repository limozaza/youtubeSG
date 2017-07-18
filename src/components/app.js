import React,{Component} from 'react';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list';

const API_KEY = 'AIzaSyAGjtQu3KOtP344QVK8JpIf6bcr3chXMXs';

class App extends Component{

    constructor(props){
        super(props);

        this.state = {
            videos: []
        };

        

         YTSearch({key: API_KEY, term: 'maroc'}, (videos)=> {
            this.setState({videos})
        });
    }

    render(){
        return (
                <div>
                    <SearchBar/>
                    <VideoList videos={this.state.videos} />
                </div>
            );
    }
}

export default App;