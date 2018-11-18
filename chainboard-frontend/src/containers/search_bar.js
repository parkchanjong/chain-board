import React, { Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};

        this.onInputChange = this.onInputChange.bind(this); 
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({term: event.target.value});
    }   

    onFormSubmit(event) {
        event.preventDefault(); //브라우저가 폼제출안하게함
        this.setState({ term : '' });

    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
              <input 
              placeholder="파일검색"             
              value={this.state.term}
              onChange={this.onInputChange} />              
            <button type="submit">submit</button>
              
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({  }, dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);