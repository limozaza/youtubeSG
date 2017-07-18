import React,{ Component } from 'react';



class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state = {term: 'Starting Value'};
    }

    onInputChange = (e) => {
        this.setState({
            term: e.target.value
        })
        console.log(e.target.value);
    }

    render(){
        return (
            <div>
                <input 
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
            </div>
        );
    }
}

export default SearchBar;