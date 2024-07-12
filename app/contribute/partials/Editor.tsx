'use client'
import React, { useEffect, useMemo, useState } from 'react';
// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import dynamic from "next/dynamic";


export default function Editor(props: any) {
    const [value, setValue] = useState(props.value);

    useEffect(() => {
        props.onChange(value)
    }, [value])

    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }), []);


    return <ReactQuill theme="snow" value={value} onChange={setValue} {...props} />;
}