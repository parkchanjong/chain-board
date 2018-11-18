import React from 'react';
import SearchBar from '../containers/search_bar';

import { Link } from 'react-router-dom';
import PageTemplate from 'components/common/PageTemplate';
import Button from 'components/common/Button';
import FileList from 'containers/file_list';

const boarlistpage = () => {
  return (
   <div>
    <PageTemplate></PageTemplate>
     <Button><Link to="/">file list</Link> </Button>
     <Button><Link to="/detail">2</Link> </Button>
     <Button><Link to="/mylist">my page</Link> </Button>
     <Button><Link to="/upload">file upload</Link> </Button>
    <SearchBar />
    


    <FileList />
  
   </div>
  );
};

export default boarlistpage;
