import React,{ Component } from 'react';


class SearchBar extends Component{

    constructor(props){
        super(props);

        this.state = {term: ''}
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
                <input onChange={this.onInputChange}/>
                <br/>
                Value of input :{this.state.term}
            </div>
        );
    }
}

export default SearchBar;