'use client'
import React, { useMemo, useState } from 'react';
// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import dynamic from "next/dynamic";


export default function Editor(props: any) {
    const [value, setValue] = useState('');
    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }), []);


    return <ReactQuill theme="snow" value={value} onChange={setValue} {...props} />;
}