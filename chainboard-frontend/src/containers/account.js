import React, { Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Account extends Component {
    

    render() {
        return (
            
        );
    }

}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({  }, dispatch);
}

export default connect(null,mapDispatchToProps)(Account);