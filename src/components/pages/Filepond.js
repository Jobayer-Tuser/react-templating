import React from 'react';
// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';
// Import FilePond styles
import 'filepond/dist/filepond.min.css';


function Filepond() {
  return (
    <div><FilePond allowMultiple={true} maxFiles={3} server="/api" /></div>
  )
}

export default Filepond;