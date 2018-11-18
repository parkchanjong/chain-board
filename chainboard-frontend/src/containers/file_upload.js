import React, { Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class UploadFiles extends Component {
    state = { image: {} }
  
    handleChange = e => this.setState({ image: e.target.files })
  
    handleSubmit = e => {
      e.preventDefault()
      this.props.onSubmit(this.state)
    }
  
    render() {
      const { image } = this.state
      return (
        <form onSumbit={this.handleSubmit}>
          <input type="file" files={image} onChange={this.handleChange} />
          <input type="button" value="submit" />
        </form>
      )
    }
  }


function mapDispatchToProps(dispatch) {
    return bindActionCreators({  }, dispatch);
}

export default connect(null,mapDispatchToProps)(UploadFiles);