import React from 'react';
import { Link } from 'react-router-dom';
import UploadFiles from '../containers/file_upload';

const uploadpage = () => {
  return (
   <div>
     <Link to="/">file list</Link>
     <UploadFiles />
   </div>
  );
};

export default uploadpage;
