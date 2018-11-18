import React, { Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class FileList extends Component {
   renderFilelist(filedata) {
    const name = filedata.name;
    const size = filedata.size;
    const account = filedata.account;
    
    return (
        <tr key={name}>
               
                <td><div data={name} /></td>
                <td><div data={size} /></td>
                <td><div data={account} /></td>
            </tr>       
        );
   }
   

    render() {
        return (
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>name</th>
                  <th>size</th>
                  <th>account</th>
                </tr>
              </thead>
              <tbody>
              
              </tbody>
            </table>            
        );//{this.props.filedata.map(this.renderFilelist)}
    }

}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({   }, dispatch);
}

export default connect(null,mapDispatchToProps)(FileList);