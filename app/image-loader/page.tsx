'use client';
import React from 'react';
import {useDropzone} from 'react-dropzone';

export default function Dropzone(props: any) {
  const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true
  });

 
  return (
    <div className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here</p>
        <button type="button" onClick={open}>
          Open File Dialog
        </button>
      </div>
      <aside>
        <h4>Files</h4>
        {/* <ul>{files}</ul> */}
      </aside>
    </div>
  );
}

<Dropzone />